// Test library deps
var expect = require('chai').expect;
var assert = require('chai').assert;

// Functions being tested
var meerkatTalkOne = require('../lib/excercise1').meerkatTalkOne;
var meerkatTalkTwo = require('../lib/excercise1').meerkatTalkTwo;

describe('#meerkatTalkOne()', function() {
  it('Should return chirp chirp chirp when caled', function() {
    expect(meerkatTalkOne()).to.equal('chirp chirp chirp');
  });
});

describe('#meerkatTalkTwo()', function() {
  it('Should return a string with nine chirps', function() {
    expect(meerkatTalkTwo()).to.equal('chirp chirp chirp chirp chirp chirp chirp chirp chirp');
  });
});
