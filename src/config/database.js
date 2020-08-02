const mongoose = require('mongoose');
const settings = require('../settings');

module.exports = function () {
  mongoose.connect(settings.mongoUrl, { useMongoClient: true });
  mongoose.Promise = Promise;
  mongoose.set('debug', settings.isMongoDebug);

  mongoose.connection.on('connected', () => {
    console.log('Mongoose! Connected at ' + settings.mongoUrl);
  });

  mongoose.connection.on('disconnected', () => {
    console.log('Mongoose! Disconnected em ' + settings.mongoUrl);
  });

  mongoose.connection.on('error', erro => {
    console.log('Mongoose! Error : ' + erro);
  });

  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      console.log('Mongoose! Disconnected by the application');
      process.exit(0);
    });
  });
};
