// Test library deps
var assert = require('chai').assert;

// Functions being tested
var chooseAnimal = require('../lib/excercise2').chooseAnimal;

describe('#chooseAnimal()', function() {
  var valid_results = [ "elephant", "penguin", "eagle", "camel" ];
  it('should return a result from valid_results when called', function() {
    var animal = chooseAnimal();
    assert.include(valid_results, animal
      , 'An animal from [' + valid_results + '] must be returned'); 
  });
});
