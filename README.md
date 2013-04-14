# angular_e2e_http

This project demonstrates testing getting and displaying data in a angular.js app.

On the master branch is unit testing where in the unit test the response data is defined.

On the mocks_file branch is a technique where a static mocks.js file sets all the response data. This technique is fine for smaller projects but as projects get bigger the mocks.js file will grow and become hard to mantain.

Ideally in the e2e scenario you would be able to set the desired response.

An alternative could be to run your e2e scenarios against a real running server. But i'd rather avoid that overhead.
