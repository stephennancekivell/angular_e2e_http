'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('my app', function() {

  beforeEach(function() {
    browser().navigateTo('../../app/index.html#/view1');
  });

  describe('view1', function() {

    it('should list some things that it got from the server', function() {
      // Here we know what the things are because they are in mocks.js.
      expect(repeater('ul.things li').count()).toBe(3);
      expect(element('ul.things li').text()).toEqual('AppleBannanaOrange');
    });

  });
});
