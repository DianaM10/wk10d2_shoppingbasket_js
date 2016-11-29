var mozzarella = require('../mozzarella');
var assert = require("assert");

describe("mozzarella", function(){

  it("should have price", function() {
    assert.equal(4.50, mozzarella.price);
  });

  it("check to see if bogof", function() {
    assert.equal(true, mozzarella.bogof);
  });
  
})