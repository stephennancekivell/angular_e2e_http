# angular_e2e_http

This project demonstrates testing getting and displaying data in a angular.js app.

On the master branch is unit testing where in the unit test the response data is defined. Im searching for a good way to do the same with e2e tests.

## ngMockE2E
The ngMockE2E branch demonstrates how to use ngMockE2E. The appTest.js file sets all the response data. This technique is fine for smaller projects but as projects get bigger the mocks.js file will grow and become hard to mantain.

## nodeTestServer
The expected response is defined in scenarios.js and sent to a simple test server, which the app is pointing to.

## mocks_file
Similar to ngMockE2E. I used this before I learnt of ngMockE2E.


Ideally in the e2e scenario you would be able to set the desired response.

An alternative could be to run your e2e scenarios against a real running server. But i'd rather avoid that overhead.
