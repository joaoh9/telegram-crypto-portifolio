const baseDAO = require('./base.dao')

module.exports = function () {
  const portifolioDAO = new baseDAO('portifolio')

  return {
    ...portifolioDAO,
    addCoin: ({ user, coin, ammount }) {
      
    }
  };
}
