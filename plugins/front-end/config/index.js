var path = require('path'),
    env = process.env.NODE_ENV || 'dev';

module.exports = {
    build : {
        path : path.resolve(__dirname + '/../build/' + env)
    }
}