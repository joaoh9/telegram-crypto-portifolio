const rp = require('request-promise');

const settings = require('../config/settings')

const baseUrl = settings.coinMarketCap.baseUrl +
                settings.coinMarketCap.cryptoPrice +
                settings.coinMarketCap.symbolQuery;

const options = {
  headers: {
    'Content-Type': settings.coinMarketCap.contentType,
    'X-CMC_PRO_API_KEY': settings.coinMarketCap.authHeader
  },
}

module.exports = function () {
  return {
    getPrice(coin) {
      const uri = baseUrl + coin;
      options.uri = uri;

      return new Promise((resolve, reject) => {
        rp(options)
          .then(res => JSON.parse(res).data[coin].quote.USD.price)
          .then(resolve)
      })
    }
  }
};
