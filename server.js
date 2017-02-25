var connect = require('connect');
var serveStatic = require('serve-static');
var chokidarSocketEmitter = require('chokidar-socket-emitter');
var server = connect().use(serveStatic('client')).listen(8080, function () {
    chokidarSocketEmitter({
        app: server
    });
    console.log('Server running: http://localhost:8080/');
});