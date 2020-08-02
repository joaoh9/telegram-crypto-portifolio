require('dotenv/config')
const rp = require('request-promise');

const portifolio = require('../protifolio')

// const coinInfoURL = '/v1/cryptocurrency/info'
const cryptoPrice = '/v1/cryptocurrency/quotes/latest'
const symbolQuery = '?symbol='

const contentType = 'application/json'

const baseUrl = process.env.BASE_URL + cryptoPrice + symbolQuery;

const options = {
  headers: {
    'Content-Type': contentType,
    'X-CMC_PRO_API_KEY': process.env.CMKTCP_AUTH_HEADER
  },
}

const prices = {}

async function getPrice() {
  return new Promise(async (resolve, reject) => {

    const coins = Object.keys(portifolio.total);
    for (const coin of coins) {
      const uri = baseUrl + coin;
      options.uri = uri;

      const res = await rp(options)
      const price = JSON.parse(res).data[coin].quote.USD.price;

      prices[coin] = price;
    }
    resolve()
  })
}

function calculateTotal() {
  return Object.entries(prices).reduce((acc, [coin, price]) => {
    return acc + prices[coin] * portifolio.total[coin]
  }, 0)
}

async function callPrices() {
  await getPrice();
  const total = calculateTotal();
  console.log(total)
  bot.sendMessage(parseInt(process.env.TELEGRAM_JOAOH9_ID), "Your current Portifolio balance is: " + total)
}

callPrices()

const res = {
  "status": {
    "timestamp": "2020-08-02T01:19:01.938Z",
    "error_code": 0,
    "error_message": null,
    "elapsed": 16,
    "credit_count": 1,
    "notice": null
  },
  "data": {
    "ETH": {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "num_market_pairs": 5292,
      "date_added": "2015-08-07T00:00:00.000Z",
      "tags": [
        "smart-contracts",
        "ethash",
        "crowdfunding",
        "pow",
        "medium-of-exchange",
        "mineable"
      ],
      "max_supply": null,
      "circulating_supply": 112006251.4365,
      "total_supply": 112006251.4365,
      "is_active": 1,
      "platform": null,
      "cmc_rank": 2,
      "is_fiat": 0,
      "last_updated": "2020-08-02T01:17:28.000Z",
      "quote": {
        "USD": {
          "price": 389.94707458,
          "volume_24h": 14408068075.1484,
          "percent_change_1h": 0.744742,
          "percent_change_24h": 12.9493,
          "percent_change_7d": 29.1974,
          "market_cap": 43676510082.3351,
          "last_updated": "2020-08-02T01:17:28.000Z"
        }
      }
    }
  }
}