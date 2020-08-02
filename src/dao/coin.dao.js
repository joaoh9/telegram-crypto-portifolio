const baseDAO = require('./base.dao')

module.exports = function () {
  const coinDAO = new baseDAO('coin')

  return coinDAO;
}
