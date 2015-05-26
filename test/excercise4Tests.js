// Test library deps
var expect = require('chai').expect;

// Function being tested
var numDays = require('../lib/excercise4').numDays;

describe('#numDays()', function() {
  it('should return 7 when called', function() {
    expect(numDays()).to.equal(7);
  });
});
