const { Client, Intents } = require('discord.js')
require('dotenv').config()

const token = process.env.APP_TOKEN

// New client instance

const client = new Client({ intents: [Intents.FLAGS.GUILDS] })

// Once client ready, this code once to log on console once bot is ready to

client.once('ready', () => {
  console.log('\x1b[36m%s\x1b[0m', 'Bot working sucessfully')
})

// DS Login with token

client.login(token)
