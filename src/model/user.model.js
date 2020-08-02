const mongoose = require('mongoose');
const mongooseSchema = mongoose.Schema;

let model = null;

module.exports = function () {
  const schema = mongooseSchema({
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    username: {
      type: String
    },
    telegramId: {
      type: Number,
      required: true
    }
  })

  model = model ? model : mongoose.model('user', schema);

  return model;
}
