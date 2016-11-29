var discount = {
  tenPercent: function(total) {
    if (total >= 20) {
      return total*0.9;
    } else return total;
  },
  fivePercent: function(customer, total) {
    if (customer.card === true) {
      return total*0.95
    } else return total;
  }
};

module.exports = discount;