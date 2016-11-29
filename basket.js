// #Shopping Basket Lab
// We need to find the price of a shopping basket.
// A shopping basket can have multiple items.
// It should be able to add and remove items.

// Discounts:

// - 10% discount for all shopping baskets over £20
// - If the customer has a valid discount card then they get an additional 5% off.

// Extension (hard!)
//  Add the ability to have buy one get one free items.

var basket = {
  contents: [],
  count: function() {
    return this.contents.length;
  },
  add: function(item) {
    this.contents.push(item);
  },
  remove: function(item) {
    this.contents.pop(item);
  }

};

module.exports = basket;