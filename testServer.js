'use strict';

var http = require('http');
var router = require('router');
var route = router();

var toRespond = [];

route.post('/things', function(req, res){
	console.log(req.read());
});

route.get('/things', function(req, res) {
	// res.setHeader("Content-Type", "application/json");
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept, X-Requested-With');
    res.writeHead(200);
    res.end('[{"name":"Apple"},{"name":"Bannana"},{"name":"Orange"}]');
    console.log('.');
});

route.options('/things', function(req, res){
	console.log('options');
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept, X-Requested-With');

	res.writeHead(200);
	res.end();
});

http.createServer(route).listen(9001); // start the server on port 8080