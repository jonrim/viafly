'use strict';
var db = require('./_db');
module.exports = db;

var User = require('./models/user');

var fs = require('fs');
var parse = require('csv-parse');

var parser = parse({delimiter: ','}, function(err, data) {
	console.log(data);
});

fs.createReadStream(__dirname+'/../../store_inventory.csv').pipe(parser);