var config = require('./gulp-config.js');

var path = require('path'),
    del = require('del'),
    lazypipe = require('lazypipe'),
    runSequence = require('run-sequence');

var gulp = require('gulp'),
    gulpUtils = require('gulp-util'),
    gulpIf = require('gulp-if'),
    jsLint = require('gulp-jshint'),
    jsBeautify = require('gulp-jsbeautifier'),
    jsUglify = require('gulp-uglify'),
    cssBeautify = require('gulp-cssbeautify'),
    cssMinify = require('gulp-minify-css'),
    sass = require('gulp-sass'),
    scssLint = require('gulp-scss-lint');

(function (gulp, config) {
    var paths,
        currentEnvironmentToBuild,
        linting = gulpUtils.env.linting || true;

    var scssLintChannel = lazypipe()
        .pipe(scssLint);

    var jsLintChannel = lazypipe()
        .pipe(jsLint);

    var jsChannel = lazypipe()
        .pipe(function () {
            return gulpIf(currentEnvironmentToBuild === 'dev', jsBeautify(), jsUglify());
        });

    gulp.task('clean', function() {
        return del(paths.output.base , {force: true});
    });

    gulp.task('scripts', function () {
        return gulp.src(path.join(paths.source.modules, '/**/*.js'))
            .pipe(gulpIf(linting, jsLintChannel()))
            .pipe(jsChannel())
            .pipe(gulp.dest(paths.output.scripts.modules.base));
    });

    gulp.task('stylesheets', function () {
        return gulp.src(path.join(paths.source.styles, '/**/*.scss'))
            .pipe(gulpIf(linting, scssLintChannel()))
            .pipe(sass())
            .pipe(gulpIf(currentEnvironmentToBuild === 'dev', cssBeautify(), cssMinify()))
            .pipe(gulp.dest(paths.output.styles));
    });

    gulp.task('assets', function () {
        return gulp.src(path.join(paths.source.assets, '/**/*.*'))
            .pipe(gulp.dest(paths.output.assets));
    });

    gulp.task('static-html', function () {
        return gulp.src(path.join(paths.source.base, '/**/*.html'))
            .pipe(gulp.dest(paths.output.base));
    });

    gulp.task('base', ['clean']);

    gulp.task('build', function () {
        var buildAll = gulpUtils.env['build-all'],
            envRequestedBuilds = (gulpUtils.env.build ? gulpUtils.env.build.split(' ') : undefined);

        var nodeEnv = process.env.NODE_ENV || 'dev',
            environmentsToBuild = (buildAll ? config.environments : envRequestedBuilds || [nodeEnv]),
            i = environmentsToBuild.length;

        (function next () {
            if (--i < 0) { 
                return; 
            }

            var currentEnvironment = environmentsToBuild[i];
            currentEnvironmentToBuild = currentEnvironment;

            console.log('Building: ', currentEnvironmentToBuild);
                
            paths = config.makeDestinations(currentEnvironmentToBuild);

            console.log('Using paths: ', paths);

            runSequence('base', 'assets', 'static-html', 'stylesheets', 'scripts', next);
        })();
    });

    gulp.task('default', ['build']);
})(gulp, config);
