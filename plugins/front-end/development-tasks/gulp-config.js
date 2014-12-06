var env = process.env.NODE_ENV || 'dev';
var path = require('path');
var interpolate = require('interpolate');
var _ = require('lodash');

var destinations = {
    source : {
        base: '../src/',
        paths : {
            styles: '/styles/',
            areas: '/areas/',
            assets: '/assets/',
            modules: '/modules/'
        }
    }
};

destinations.output = {
    base: '../build/{env}',
    paths : {
        styles: '/stylesheets/',
        assets: '/static/assets/',
        scripts : {
            base: '/js/',
            paths : {
                vendor: '/vendor/',
                modules : {
                    base: '/modules/',
                    paths : {
                        services: '/services'
                    }
                }
            }
        }
    }
};

module.exports = {
    makeDestinations : function (environment) {
        var config = (typeof(environment) === 'string' ? {env: environment} : environment);

        var directorySkeleton = makeDirectorySkeleton(destinations);
        var composedDirectoryStructure = composePaths(config, directorySkeleton);

        return composedDirectoryStructure;
    },
    environments : ['dev', 'prod']
};

function makeSkeleton (destination, base) {
    var result = {}
    ,   destinationPath
    ,   toPrepend = '';

    var prepend = function (string, prepend) {
        if (!prepend) { return string; }

        return path.normalize(prepend + string);
    }

    if (typeof(destination) === 'string') {
        destination = {
            path: destination,
            prepend: base || false
        };
    } else {
        // Assumption: object

        destination.prepend = destination.prepend || prepend(destination.base, base);
    }

    if (destination.path) {
        // Exit early, we need to go no deeper.
        return prepend(destination.path, destination.prepend);
    }

    if (destination.base) {
        result.base = prepend(destination.base, base);
    }

    for (var prop in destination.paths) {
        destinationPath = destination.paths[prop];

        result[prop] = makeSkeleton(destinationPath, destination.prepend)
    }

    return result;
};

function makeDirectorySkeleton (destinations) {
    var skeleton = {};

    for (var rootProp in destinations) {
        var rootSkeleton = makeSkeleton(destinations[rootProp]);

        skeleton[rootProp] = rootSkeleton;
    }

    return skeleton;
}

function composePaths (config, directorySkeleton) {
    var clone = _.cloneDeep(directorySkeleton);

    function assign (branch, limb) {
        var value = branch[limb];

        branch[limb] = interpolate(value, config)
    }

    function traverse (branch, next) {
        for (var limb in branch) {
            var value = branch[limb];

            if (typeof(value) == 'string') {
                next.apply(this, [branch, limb]);
            }

            if (value !== null && typeof(value) == 'object') {

                traverse(branch[limb], next);
            }
        }
    }

    traverse(clone, assign);
            
    return clone;
}