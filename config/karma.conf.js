module.exports = function(config) {
  'use strict';

  config.set({
    // your config
    basePath: '../',
    frameworks: ["jasmine"],
    browsers: ['Chrome'],

    files: [
      'components/angular/angular.js',
      'components/angular-resource/angular-resource.js',
      'components/angular-mocks/angular-mocks.js',
      'app/js/**/*.js',
      'test/unit/**/*.js'
    ]
  });
};