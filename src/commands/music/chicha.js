const { SlashCommandBuilder } = require('@discordjs/builders')
const music = require('@koenie06/discord.js-music')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('chicha')
    .setDescription('CHICHAAA CHICHA DE JORA'),

  async execute(interaction) {
    /* This will get the song that has been provided */
    const song = '../../data/popCornAndino.mp4'

    /* Gets the voice channel where the member is in. If the member isn't in any, return. */
    const voiceChannel = interaction.member.voice.channel
    if (!voiceChannel)
      return interaction.reply({
        content: 'You need to be in a voice channel!',
        ephemeral: true,
      })

    /* Get more info about how the play command works at https://npmjs.com/package/@koenie06/discord.js-music#play */
    music.play({
      interaction: interaction,
      channel: voiceChannel,
      song: song,
    })

    return interaction.reply('Chicha en 8 bitardos')
  },
}
