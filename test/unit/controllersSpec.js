'use strict';

describe('app', function() {
	beforeEach(function(){
		this.addMatchers({
			toEqualData: function(expected) {
				return angular.equals(this.actual, expected);
			}
		});
	});

	describe('controllers', function(){
		var ctrl, httpBackend, scope;
		beforeEach(module('myApp.controllers'));

		beforeEach(inject(function($httpBackend, $controller, $rootScope) {
			scope = $rootScope.$new();
			httpBackend = $httpBackend;

			httpBackend.whenGET('/things')
				.respond([{name:'Apple'},{name:'Bannana'},{name:'Orange'}]);

			ctrl = $controller('MyCtrl1', { $scope : scope });
		}));

		it('should have the things', function() {
			httpBackend.flush();
			expect(scope.things).toEqualData([{name:'Apple'},{name:'Bannana'},{name:'Orange'}]);
		});
	});
});
