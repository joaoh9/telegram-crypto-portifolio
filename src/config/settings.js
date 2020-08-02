require('dotenv/config')

module.exports = {
  mongoUrl: `mongodb://${process.env.DB_SERVER}/${process.env.DB_NAME}`,
  isMongoDebug: false,
  telegram: {
    token: process.env.TELEGRAM_BOT_TOKEN
  },
  coinMarketCap: {
    baseUrl: process.env.BASE_URL,
    authHeader: CMKTCP_AUTH_HEADER,
    cryptoPrice: '/v1/cryptocurrency/quotes/latest',
    symbolQuery: '?symbol=',
    contentType: 'application/json'
  }
};
