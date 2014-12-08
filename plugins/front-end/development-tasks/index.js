var config = require('./gulp-config.js');

module.exports = function (options, imports, register) {
    register(null, {
        build : {
            config : config
        }
    });
};