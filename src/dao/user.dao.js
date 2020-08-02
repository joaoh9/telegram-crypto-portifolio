const baseDAO = require('./base.dao')

module.exports = function () {
  const userDAO = new baseDAO('user')

  return userDAO;
}
