const { REST } = require('@discordjs/rest')
const { Routes } = require('discord-api-types/v9')
const { ClientUser } = require('discord.js')
const fs = require('fs')
var colors = require('colors')

const clientId = process.env.CLIENT_ID
const guildId = process.env.GUILD_ID
const token = process.env.APP_TOKEN

module.exports = (client) => {
  client.handleCommands = async (commandDirs, path) => {
    client.commandArray = []
    for (folder of commandDirs) {
      const commandFiles = fs
        .readdirSync(`${path}/${folder}`)
        .filter((file) => file.endsWith('.js'))
      for (const file of commandFiles) {
        const command = require(`../commands/${folder}/${file}`)
        // Set a new item in the Collection
        // With the key as the command name and the value as the exported module
        client.commands.set(command.data.name, command)
        client.commandArray.push(command.data.toJSON())
      }
    }
    // Push commands to the Discord API
    const rest = new REST({ version: '9' }).setToken(token)
    ;(async () => {
      try {
        console.log(
          colors.yellow('Started refreshing application (/) commands.')
        )

        await rest.put(Routes.applicationGuildCommands(clientId, guildId), {
          body: client.commandArray,
        })

        console.log(
          colors.green('Successfully reloaded application (/) commands.')
        )
      } catch (error) {
        console.error(error)
      }
    })()
  }
}
