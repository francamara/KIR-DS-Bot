const { SlashCommandBuilder } = require('@discordjs/builders')
const {
  joinVoiceChannel,
  createAudioResource,
  VoiceConnection,
  getVoiceConnection,
} = require('@discordjs/voice')
const { createAudioPlayer } = require('@discordjs/voice')
const { generateDependencyReport } = require('@discordjs/voice')
// const {  } = require('@discordjs/voice');

// DONE : Connect bot to a voice channel

// TODO : Separate either if the content sent in the slash command is youtube, spotify, string or whatever

module.exports = {
  data: new SlashCommandBuilder()
    .setName('chicha')
    .setDescription('Pop Corn Andino'),

  async execute(interaction) {
    /* Gets the voice channel where the member is in. If the member isn't in any, return. */
    const voiceChannel = interaction.member.voice.channel
    // console.log(voiceChannel)
    if (!voiceChannel)
      return interaction.reply({
        content: 'You need to be in a voice channel!',
        ephemeral: true,
      })
    if (voiceChannel) {
      // const audioSource = createAudioResource('../../data/popCornAndino.mp4')

      joinVoiceChannel({
        channelId: voiceChannel.id,
        guildId: voiceChannel.guild.id,
        adapterCreator: voiceChannel.guild.voiceAdapterCreator,
      })

      const player = createAudioPlayer()

      const audioSource = createAudioResource(
        'https://streams.ilovemusic.de/iloveradio109.mp3'
      )

      player.play(audioSource)

      // console.log(generateDependencyReport())

      return interaction.reply({
        content: 'Ay que rica chichita',
        // ephemeral: true,
      })
    }
  },
}
