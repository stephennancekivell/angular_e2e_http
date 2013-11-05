'use strict';

var http = require('http');
var router = require('router');
var route = router();

var toRespond = [];

route.post('/things', function(req, res) {
	req.on('data', function(chunk) {
		toRespond.push(chunk);
	});
	res.writeHead(200);
	res.end();
});

route.get('/things', function(req, res) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept, X-Requested-With');
	res.writeHead(200);
	res.end(toRespond.pop());
});

route.options('/things', function(req, res) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept, X-Requested-With');

	res.writeHead(200);
	res.end();
});

http.createServer(route).listen(9001);