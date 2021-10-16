const { SlashCommandBuilder } = require('@discordjs/builders')
const { joinVoiceChannel } = require('@discordjs/voice')

// DONE : Connect bot to a voice channel

// TODO : Separate either if the content sent in the slash command is youtube, spotify, string or whatever

module.exports = {
  data: new SlashCommandBuilder()
    .setName('play')
    .setDescription('Plays a song in the voice channel')
    .addStringOption((string) =>
      string
        .setName('song')
        .setDescription('Play a given song name/URL in the voice channel')
        .setRequired(true)
    ),
  async execute(interaction) {
    /* This will get the song that has been provided */
    const song = interaction.options.getString('song')

    console.log(song)

    /* Gets the voice channel where the member is in. If the member isn't in any, return. */
    const voiceChannel = interaction.member.voice.channel
    // console.log(voiceChannel)
    if (!voiceChannel)
      return interaction.reply({
        content: 'You need to be in a voice channel!',
        ephemeral: true,
      })
    if (voiceChannel) {
      joinVoiceChannel({
        channelId: voiceChannel.id,
        guildId: voiceChannel.guild.id,
        adapterCreator: voiceChannel.guild.voiceAdapterCreator,
      })
    }
  },
}
