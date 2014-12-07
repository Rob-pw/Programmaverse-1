var config = require('./config.js');

module.exports = function setup (options, imports, register) {
    var web = imports['web'];

    var Hapi = require('hapi'),
        pack = new Hapi.Pack();

    for (var prop in config.packs) {
        var packConfig = config.packs[prop];

        pack.server(packConfig.port, {
            labels : packConfig.labels
        });
    }

    console.log(web.config.build.path);

    pack.require('hapi-spa', { folder: web.config.build.path }, function (err) {
        if (err) {
            throw err;
        }

        console.log("hapi-spa UP!");
    });

    register(null, {
        hapiServer : {
            pack : pack,
            config : config
        }
    });
};