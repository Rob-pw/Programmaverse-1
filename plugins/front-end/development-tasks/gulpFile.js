var config = require('./gulp-config.js');

var path = require('path'),
    del = require('del'),
    lazypipe = require('lazypipe'),
    runSequence = require('run-sequence'),
    bowerFiles = require('main-bower-files'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

var gulp = require('gulp'),
    gulpUtils = require('gulp-util'),
    gulpIf = require('gulp-if'),
    filter = require('gulp-filter'),
    browserify = require('gulp-browserify'),
    jsLint = require('gulp-jshint'),
    jsBeautify = require('gulp-jsbeautifier'),
    jsUglify = require('gulp-uglify'),
    cssBeautify = require('gulp-cssbeautify'),
    cssMinify = require('gulp-minify-css');

(function (gulp, config) {
    var paths,
        currentEnvironmentToBuild,
        linting = gulpUtils.env.linting || true;

        /*
    var jsLintChannel = lazypipe()
        .pipe(jsLint);
        */

    var jsChannel = lazypipe()
        .pipe(browserify)
        .pipe(function () {
            return gulpIf(currentEnvironmentToBuild === 'dev', jsBeautify(), jsUglify());
        });

    var cssChannel = lazypipe()
        .pipe(function () {
            return gulpIf(currentEnvironmentToBuild === 'dev', cssBeautify(), cssMinify());
        });

    gulp.task('clean', function() {
        return del(paths.output.base , {force: true});
    });

    gulp.task('components', function () {


        var jsFilterPath = (currentEnvironmentToBuild !== 'dev' ? '**/*.min.js' : '**/*.js');

        var jsFilter = filter('**/*.js');
        var cssFilter = filter('**/*.css');
        var fontFilter = filter(['*.eot', '*.woff', '*.svg', '*.ttf']);

        return gulp.src(bowerFiles({
                paths: paths.source.base
            }))
            .pipe(jsFilter)
            .pipe(gulp.dest(paths.output.scripts.vendor))
            .pipe(jsFilter.restore())
            .pipe(fontFilter)
            .pipe(gulp.dest(paths.output.assets + '/fonts'))
            .pipe(fontFilter.restore())
            .pipe(cssFilter)
            .pipe(cssChannel())
            .pipe(gulp.dest(paths.output.styles));
    });

    gulp.task('scripts', function () {
        return gulp.src(path.join(paths.source.modules, '/**/*.js'))
            /*.pipe(gulpIf(linting, jsLintChannel()))*/
            .pipe(jsChannel())
            .pipe(gulp.dest(paths.output.scripts.modules.base));
    });

    gulp.task('stylesheets', function () {
        return gulp.src(path.join(paths.source.styles, '/**/*.css'))
            .pipe(cssChannel())
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

            runSequence('base', 'components', 'assets', 'static-html', 'stylesheets', 'scripts', next);
        })();
    });

    gulp.task('browser-sync', function () {
        browserSync.init(null, {
            proxy: 'localhost:8080'
        });
    });

    gulp.task('live', ['build', 'browser-sync'], function () {
        gulp.watch(path.join(paths.source.styles, '*.css'), ['stylesheets', reload]);
        gulp.watch(path.join(paths.source.base, '/**/*.html'), ['static-html', reload]);
        
        try {
            gulp.watch(path.join(paths.source.modules, '/**/*.js'), ['scripts', reload]);
        } catch (ex) {
            console.error("We should be dead, because of " + ex);
        }
    });
    
    gulp.task('default', ['build']);
})(gulp, config);
