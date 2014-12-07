var path = require('path'),
    architect = require('architect');

var architectConfig = architect.loadConfig(path.resolve('./config/architect.js'));

architect.createApp(architectConfig, function (err, app) {
    if (err) {
        throw err;
    } else {
        var hapiServer = app.services.hapiServer;

        hapiServer.pack.start(function () {
            console.log("Hapi pack is up!");
        });
    }
});