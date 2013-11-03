'use strict';

/* Controllers */

angular.module('myApp.controllers', ['ngResource', 'ng']).
  controller('MyCtrl1', ['$resource', '$scope', '$http', function($resource, $scope, $http) {
    $scope.things = $resource('http://127.0.0.1\\:9001/things', {}, {}).query();
  }]);
