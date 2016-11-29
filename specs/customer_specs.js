var customer = require('../customer');
// var mozzarella = require('../mozzarella');
// var manchego = require('../manchego');
// var basket = require('../basket');
var assert = require("assert");

describe("Customer", function() {

  it("can check for discount card", function() {
    assert.equal(true, customer.card);
  });

  });