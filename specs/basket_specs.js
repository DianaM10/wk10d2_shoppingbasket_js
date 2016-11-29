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
  });

  it("can have multiple cheeses and checks for bogof items but will add price of 2 when 3 off bogof item is added", function() {
    basket.add(manchego);
    basket.add(mozzarella);
    basket.add(mozzarella);
    basket.add(mozzarella);
    basket.add(manchego);
    basket.add(manchego);
    assert.equal(6, basket.count());
    assert.equal(27, basket.basketTotal());
  });

  it("can have multiple cheeses", function() {
    basket.contents = [];
    basket.add(manchego);
    basket.add(mozzarella);
    basket.add(mozzarella);
    basket.add(manchego);
    basket.add(manchego);
    assert.equal(5, basket.count());
  })

  it("can get basket total", function() {
    assert.equal(22.5, basket.basketTotal());
  });

  

});