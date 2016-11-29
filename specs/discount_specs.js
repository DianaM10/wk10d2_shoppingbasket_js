var discount = require('../discount');
// var mozzarella = require('../mozzarella');
// var manchego = require('../manchego');
var basket = require('../basket');
var customer = require('../customer');
var assert = require("assert");

describe("Discount", function() {

  it("can apply 10% off orders over 20quid", function() {
    assert.equal(18, discount.tenPercent(20));
  });

  it("can apply discount to the basket", function() {
    assert.equal(20.25, discount.tenPercent(basket.basketTotal()));
  });

  it("can apply 5% discount if customer has card", function() {
    assert.equal(19.2375, discount.fivePercent(customer, discount.tenPercent(basket.basketTotal())));
  });

});