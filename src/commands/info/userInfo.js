const { SlashCommandBuilder } = require('@discordjs/builders')
const { Client, Collection, Intents, MessageEmbed } = require('discord.js')
// const client = new Client({ intents: [Intents.FLAGS.GUILDS] })

module.exports = {
  data: new SlashCommandBuilder()
    .setName('userinfo')
    .setDescription('Info about the user who summoned this command'),
  async execute(interaction) {
    const userInfo = {
      userName: interaction.user.tag,
    }
    interaction.reply({
      embeds: [
        new MessageEmbed()
          .setColor('#C219D8')
          .setTitle(`Username: ${userInfo.userName}`),
      ],
    })
  },
}
