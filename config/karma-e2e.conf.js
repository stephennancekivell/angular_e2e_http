module.exports = function(config) {
	'use strict';

	config.set({
		// your config
		basePath: '../',
		frameworks: ["jasmine"],
		browsers: ['Chrome'],

		files: [
			'app/lib/angular/angular.js',
			'app/lib/angular/angular-*.js',
			'test/lib/angular/angular-*.js',
			'test/lib/*.js',
			'app/js/**/*.js',
			'test/e2e/**/*.js'
		],
		proxies: {
			'/': 'http://127.0.0.1/'
		}

	});
};