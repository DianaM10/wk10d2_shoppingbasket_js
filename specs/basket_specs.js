var basket = require('../basket');
var assert = require("assert");

describe("Basket", function() {

  it("should be empty at start", function() {
    assert.equal(0, basket.count());
  })

  it("can add items", function() {
    basket.add("item");
    assert.equal(1, basket.count());
  })

  it("can remove items", function() {
    basket.remove("item");
    assert.equal(0, basket.count());
  })

  it("can have multiple items", function() {
    basket.add("item");
    basket.add("item");
    basket.add("item");
    assert.equal(3, basket.count());
  })

});