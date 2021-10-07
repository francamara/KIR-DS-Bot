const { Client, Collection, Intents } = require('discord.js')
const colors = require('colors')
const fs = require('fs')
const dotenv = require('dotenv').config()

const token = process.env.APP_TOKEN
console.clear()
// const guildId = process.env.GUILD_ID
// const intents = new Intents(32767)

const client = new Client({ intents: [Intents.FLAGS.GUILDS] })

client.commands = new Collection()

// minuto 5 https://www.youtube.com/watch?v=HNH4V6Dhw6s

const functions = fs
  .readdirSync('./src/functions')
  .filter((file) => file.endsWith('.js'))
const eventFiles = fs
  .readdirSync('./src/events')
  .filter((file) => file.endsWith('.js'))
const commandDirs = fs.readdirSync('./src/commands')

for (file of functions) {
  require(`./functions/${file}`)(client)
}

client.handleEvents(eventFiles, './src/events')
client.handleCommands(commandDirs, './src/commands')
client.login(token)
