'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('my app', function() {

  beforeEach(function() {
    browser().navigateTo('../../app/index-e2e.html#/view1');
  });

  describe('view1', function() {
    it('should list some things that it got from the server', function() {
      // whats the best way to set what the HTTP get on /things should be.
      // this fails because the result from HTTP get /things hasnt been set.
      expect(repeater('ul li').count()).toBe(3);
      expect(element('ul li').text()).toEqual('AppleBannanaOrange');
    });
  });
});
