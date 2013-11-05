module.exports = function(config) {
  'use strict';

  config.set({
    // your config
    basePath: '../',
    frameworks: ["ng-scenario"],
    browsers: ['Chrome'],

    files: [
      'app/js/**/*.js',
      'test/e2e/**/*.js'
    ],

    proxies: {
      '/': 'http://localhost:8000/'
    }
  });
};