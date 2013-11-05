module.exports = function(grunt) {
	'use strict';

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		karma: {
			unit: {
				configFile: 'config/karma.conf.js',
				singleRun: true
			},
			e2e: {
				configFile: 'config/karma-e2e.conf.js',
				singleRun: true
			}
		},
		connect: {
			use_defaults: {
				port: 8000
			}
		}
	});
	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-contrib-connect');

	grunt.registerTask('e2e', ['connect', 'karma:e2e']);
};