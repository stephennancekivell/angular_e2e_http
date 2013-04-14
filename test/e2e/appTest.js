'use strict';

angular.module('myAppTest', ['myApp', 'ngMockE2E'])
.run(function($httpBackend) {
	console.log('myAppTest running');
	$httpBackend.whenGET('/things').
		respond([{name:'Apple'},{name:'Bannana'},{name:'Orange'}]);

	$httpBackend.whenGET().passThrough();
});