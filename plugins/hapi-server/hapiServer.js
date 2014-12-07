var config = require('./config.js');

module.exports = function setup (options, imports, register) {
    var web = imports['web'];

    var Hapi = require('hapi'),
        server = new Hapi.Server();

    for (var prop in config.packs) {
        var packConfig = config.packs[prop];

        server.connection({
            port: packConfig.port,
            labels : packConfig.labels
        });
    }

    register(null, {
        hapiServer : {
            server : server,
            config : config
        }
    });
};