const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('chicha')
    .setDescription('Muy temprano pero que rica chichita'),
  async execute(interaction) {
    interaction.reply(
      'Nunca es tarde para una _chichita_ \n https://open.spotify.com/playlist/0apSD1XZsZ86s81wpHeuYt?si=c197c462686d4192'
    )
  },
}
