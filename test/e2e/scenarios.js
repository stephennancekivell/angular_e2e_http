'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('my app', function() {

  beforeEach(function() {
    browser().navigateTo('../../app/index.html#/view1');
  });

  describe('view1', function() {
    it('should list some things that it got from the server', function() {
      $.post('http://127.0.0.1:9001/things',
        '[{"name":"Apple"},{"name":"Bannana"},{"name":"Orange"}]');
      
      expect(repeater('ul li').count()).toBe(3);
      expect(element('ul li').text()).toEqual('AppleBannanaOrange');
    });

    it('should list some things that it got from the server', function() {
      $.post('http://127.0.0.1:9001/things',
        '[{"name":"Strawberry"},{"name":"Raspberry"},{"name":"Blueberry"}]');
      
      expect(repeater('ul li').count()).toBe(3);
      expect(element('ul li').text()).toEqual('StrawberryRaspberryBlueberry');
    });
  });
});
