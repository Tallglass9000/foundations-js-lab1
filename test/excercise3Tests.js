// Test library deps
var assert = require('chai').assert;
var _ = require('lodash-node');

// Functions being tested
var animalStats = require('../lib/excercise3').animalStats;
var animalIndexing = require('../lib/excercise3').animalIndexing;

describe('excercise 3', function() {
  var animalExhibitStats = {
    "numberOpen": 13,
    "number closed": 2,
    "petting-zoo-open": true,
    "mostPopular": "Lucky the Emperor Penguin",
    "2ndMostPopular": "Dumbo the Depressed Donkey"
  };

  describe('#animalStats()', function() {
    it('must have the same values as when it was created', function() {
      assert(_.isEqual(animalStats(), animalExhibitStats),
        'animalExhibitStats value should not change'
      );
    });
  });

  describe('#animalIndexing()', function() {
    var stats_clone = _.clone(animalExhibitStats)
    stats_clone.mostPopular = null;
    stats_clone.numberOpen = null;
    it('Should change the values of mostPopular and NumberOpen to null', function() {
      assert(_.isEqual(animalIndexing(), stats_clone),
        'mostPopular and numberOpen must be null, and other attributes must be left alone'
      );
    });
  });
});
