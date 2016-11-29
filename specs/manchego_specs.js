var manchego = require('../manchego');
var assert = require("assert");

describe("manchego", function(){

  it("should have price", function() {
    assert.equal(6, manchego.price);
  });

  it("is item bogof", function() {
    assert.equal(false, manchego.bogof);
  })
})