const mongoose = require('mongoose');
const mongooseSchema = mongoose.Schema;

const { ObjectId } = mongoose.Schema.Types;

let model = null;

module.exports = function () {
  const schema = mongooseSchema({
    coinId: {
      type: ObjectId,
      required: true
    },
    price: {
      type: String
    },
    price: {
      type: Number
    },
    volume_24h: {
      type: Number
    },
    percent_change_1h: {
      type: Number
    },
    percent_change_24h: {
      type: Number
    },
    percent_change_7d: {
      type: Number
    },
    market_cap: {
      type: Number
    },
    last_updated: {
      type: Date
    }
  })
 
  model = model ? model : mongoose.model('price', schema);

  return model;
}