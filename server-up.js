var path = require('path'),
    architect = require('architect');

var architectConfig = architect.loadConfig(path.resolve('./config/architect.js'));

architect.createApp(architectConfig, function (err, app) {
    if (err) {
        throw err;
    } else {
        console.log(app.services);
        var hapiServer = app.services.hapiServer;

        hapiServer.pack.start(function () {
            console.log("Server started at " + hapiServer.config.packs.web.port);
        });
    }
});