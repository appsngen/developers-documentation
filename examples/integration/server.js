(function () {
    'use strict';

    var path = require('path');
    var connect = require('connect');
    var serveStatic = require('serve-static');
    var nconf = require('nconf');
    var app;

    nconf.file(path.join(__dirname, 'config.json'));

    app = connect();
    app.use(serveStatic(path.join(__dirname, 'content')));
    app.listen(nconf.get('port'), function () {
        console.log('Server is listening on http://localhost:' + nconf.get('port'));
    });
}());