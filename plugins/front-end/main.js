var config = require('./config/');

module.exports = function setup (options, imports, register) {
    register(null, {
        web : {
            config : config
        }
    });
};