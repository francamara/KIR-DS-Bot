const colors = require('colors')

module.exports = {
  name: 'interactionCreate',
  async execute(interaction, client) {
    if (!interaction.isCommand()) return

    const command = client.commands.get(interaction.commandName)

    console.log(
      colors.white(
        `COMMAND: "/${command.data.name}" EXECUTED BY ${interaction.user.tag}`
      )
    )

    if (!command) return

    try {
      await command.execute(interaction)
    } catch (error) {
      console.error(error)
      await interaction.reply({
        content:
          'There was an error while executing this command! (If problem persists, please contact @francamaraph#9089',
        ephemeral: true,
      })
      console.log(colors.red(`Error executing "/${command.data.name}"`))
    }
  },
}
