const baseDAO = require('./base.dao')

module.exports = function () {
  const priceDAO = new baseDAO('price')

  return priceDAO;
}
