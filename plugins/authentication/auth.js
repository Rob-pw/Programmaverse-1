var req = require('request');

var authService = (function AuthenticationService () {
    function authenticate (assertion, callback) {
        if (assertion) {
            req.post('https://login.persona.org/verify', {
                form : {
                    assertion: assertion,
                    audience: 'rob.pw'
                }
            }, function (err, response, body) {
                if (err) {
                    throw err;
                }

                var data = (typeof(body) === 'string' ? JSON.parse(body) : body);

                if (data) {
                    callback({
                        email : data.email,
                        body : data
                    });
                }
            });
        }
    };

    return {
        authenticate : authenticate
    }
})();
 
var authenticationPlugin = {
    register : function (plugin, options, next) {
        var server = plugin.select('web');

        var routes = [{
            method: 'GET',
            path: '/login',
            handler : function (request, reply) {
                reply.view('login');
            }
        }, {
            method: 'POST',
            path: '/auth', 
            handler : function (request, reply) {
                var assertion = request.payload.assertion;

                if (assertion) {
                    authService.authenticate(assertion, function (data) {
                        if (data && data.email) {
                            reply({
                                success: true,
                                email: data.email
                            });
                        } else {
                            reply({
                                success: false
                            });
                        }
                    });
                }
            } 
        }];

        server.route(routes);

        next();
    }
};

authenticationPlugin.register.attributes = {
    name: 'Authentication',
    version: '0.0.1'
};

module.exports = function setup (options, imports, register) {
    var hapiServer = imports.hapiServer,
        server = hapiServer.server;

    server.register({
        register : authenticationPlugin
    }, function (err) {
        if (err) {
            register(err, null);
        } else {
            register(null, {
                authentication : {
                    authService : authService
                }
            });
        }
    });
}