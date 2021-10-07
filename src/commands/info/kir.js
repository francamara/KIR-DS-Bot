const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('kir')
    .setDescription('Keep it rolling rolling rolling'),
  async execute(interaction) {
    await interaction.reply('KEEP IT ROLLING ROLLING ROLLING')
  },
}
