var config = require('./config.js');

module.exports = function setup (options, imports, register) {
    var web = imports['web'];

    var Hapi = require('hapi'),
        pack = new Hapi.Pack(),
        packCount = config.packs.length;

    for (var i = config.packs.length - 1; i >= 0; i -= 1) {
        var packConfig = config.packs[i];

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