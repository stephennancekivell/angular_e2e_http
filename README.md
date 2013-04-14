# angular_e2e_http

This project demonstrates testing getting and displaying data in a angular.js app.

On the master branch is unit testing where in the unit test the response data is defined.

## ngMockE2E
The ngMockE2E branch demonstrates how to use ngMockE2E. The appTest.js file sets all the response data. This technique is fine for smaller projects but as projects get bigger the mocks.js file will grow and become hard to mantain.

## mocks_file
Similar to ngMockE2E. I used this before I learnt of ngMockE2E.


Ideally in the e2e scenario you would be able to set the desired response.

An alternative could be to run your e2e scenarios against a real running server. But i'd rather avoid that overhead.
