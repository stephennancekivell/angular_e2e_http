'use strict';

/* Controllers */

angular.module('myApp.controllers', ['ngResource']).
  controller('MyCtrl1', ['$resource', '$scope', function($resource, $scope) {
    $scope.things = $resource('/things', {}, {}).get();

  }])
  .controller('MyCtrl2', [function() {

  }]);