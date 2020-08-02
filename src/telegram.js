const telegram = require('node-telegram-bot-api');

const settings = require('./config/settings')

const dao = require('./dao');

const bot = new telegram(settings.telegram.token, { polling: true })

bot.on('message', (msg) => {
  dao.user.save({
    firstName: msg.chat.first_name,
    lastName: msg.chat.last_name,
    username: msg.chat.username,
    telegramId: msg.chat.id
  })
})

bot.onText(/\/getPortifolioTotal/, () => { })
