var path = require('path');

var webPlugin = {
    register : function (plugin, options, next) {
        var server = plugin.select('web');
        var destinations = options.destinations;

        var routes = [{
            method: 'GET',
            path: '/hub',
            handler : function (request, reply) {
                reply.view('hub', {
                    name: request.query.name || 'Bob'
                });
            }
        }, {
            method: 'GET',
            path: '/challenge',
            handler : function (request, reply) {
                reply.view('challenge');
            }
        }, {
            method: 'GET',
            path: '/{filename*}',
            handler : {
                directory : {
                    path: destinations.output.base,
                    listing: true
                }
            }
        }];

        server.route(routes);

        next();
    }
};

webPlugin.register.attributes = {
    name: 'Web',
    version: '0.0.1'
};

module.exports = function setup (options, imports, register) {
    var hapiServer = imports.hapiServer,
        server = hapiServer.server,
        buildConfig = imports.build.config;

    var destinations = buildConfig.makeDestinations(buildConfig.defaultEnv, true);

    server.views({
        engines : {
            swig : require('swig')
        },
        layoutPath: destinations.source.layouts,
        partialsPath: destinations.source.partials,
        path: destinations.source.views,
        isCached: false
    });

    server.register({
        register : webPlugin,
        options : {
            destinations : destinations
        }
    }, function (err) {
        if (err) {
            register(err, null);
        }

        register(err, null)
    });
};