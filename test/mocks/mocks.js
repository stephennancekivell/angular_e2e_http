'use strict';


myApp.config(function($provide){
  $provide.decorator('$httpBackend', angular.mock.e2e.$httpBackendDecorator);
});

myApp.run(function($httpBackend){
  console.log('Setting up mocks');
  $httpBackend.whenGET('/things').
    respond([{name:'Apple'},{name:'Bannana'},{name:'Orange'}]);

  $httpBackend.whenGET().passThrough();
});