const mongoose = require('mongoose');
const mongooseSchema = mongoose.Schema;

let model = null;

module.exports = function () {
  const schema = mongooseSchema({
    coin: {
      type: String,
      required: true
    },
    id: {
      type: String
    },
    name: {
      type: String
    },
    symbol: {
      type: String
    },
    slug: {
      type: String
    },
    tags: [{
      tag: {
        type: String
      }
    }],
    cmc_rank: {
      type: Number
    },
    last_updated: {
      type: Date
    }
  })

  model = model ? model : mongoose.model('coin', schema);

  return model;
}
