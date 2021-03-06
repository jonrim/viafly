require('babel-register');
var http = require('http'),
    fs = require('fs');
var express = require('express');
var app = express();
var chalk = require('chalk');
var parse = require('csv-parse');

app.setValue = app.set.bind(app);

app.getValue = function (path) {
    return app.get(path);
};

require('./server/app/configure/app-variables')(app);
require('./server/app/configure/static-middleware')(app);
require('./server/app/configure/parsing-middleware')(app);

app.get('/data', function (req, res) {
    var parser = parse({delimiter: ','}, function(err, data) {
        res.send(data);
    });

    fs.createReadStream(__dirname+'/store_inventory.csv').pipe(parser);
});

app.get('/*', function (req, res) {
    res.sendFile(__dirname + '/server/app/views/index.html');
});

var server = require('http').createServer();

var createApplication = function () {
    server.on('request', app); // Attach the Express application.
};

var startServer = function () {

    var PORT = process.env.PORT || 1337;

    server.listen(PORT, function () {
        console.log(chalk.blue('Server started on port', chalk.magenta(PORT)));
    });

};

createApplication();
startServer();