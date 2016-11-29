var basket = require('../basket');
var mozzarella = require('../mozzarella');
var manchego = require('../manchego');
var assert = require("assert");

describe("Basket", function() {

  it("should be empty at start", function() {
    assert.equal(0, basket.count());
  })

  it("can add mozzarella", function() {
    basket.add(mozzarella);
    assert.equal(1, basket.count());
  })

  it("can remove mozzarella", function() {
    basket.remove(mozzarella);
    assert.equal(0, basket.count());
  })

  it("can have multiple cheeses", function() {
    basket.add(manchego);
    basket.add(mozzarella);
    basket.add(manchego);
    basket.add(manchego);
    assert.equal(4, basket.count());
  })

  it("can get basket total", function() {
    assert.equal(22.5, basket.basketTotal());
  })

});