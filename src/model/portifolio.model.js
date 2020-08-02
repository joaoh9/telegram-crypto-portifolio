const mongoose = require('mongoose');
const mongooseSchema = mongoose.Schema;

const { ObjectId } = mongoose.Schema.Types;

let model = null;

module.exports = function () {
  const schema = mongooseSchema({
    user: {
      type: ObjectId,
      required: true
    },
    pair: [{
      coin: {
        type: String,
        required: true
      },
      ammount: {
        type: String,
        required: true
      }
    }]
  })

  model = model ? model : mongoose.model('portifolio', schema);

  return model;
}