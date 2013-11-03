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
		}
	});
	grunt.loadNpmTasks('grunt-karma');
};