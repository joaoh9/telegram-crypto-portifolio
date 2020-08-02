const models = require('../model');

class baseDAO {
  constructor(model) {
    this.model = models[model];
  }

  getModel() {
    return this.model;
  }

  save(entity) {
    return new Promise((resolve, reject) => {
      this.model
        .create(entity)
        .then(item => this.getById(item._id))
        .then(resolve)
        .catch(reject)
    })
  }

  getAll(filter) {
    return new Promise((resolve, reject) => {
      this.model.find(filter)
        .lean()
        .exec()
        .then(resolve)
        .catch(reject)
    })
  }

  getById(id) {
    return new Promise((resolve, reject) => {
      this.getAll({ _id: id })
        .then(res => {
          if (users.length === 0) {
            resolve(null);
          } else {
            resolve(res[0]);
          }
        })
        .catch(reject)
    })
  }
}

module.exports = baseDAO;