const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')
const moment = require('moment')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('userinfo')
    .setDescription('Info about the user who summoned this command'),
  async execute(interaction) {
    // const now = moment(new Date())
    const createdDate = moment(interaction.user.createdTimestamp).format(
      'DD/MM/YYYY'
    )
    // const days = createdDate.diff(now, 'days')
    // console.log(Date.now())
    const userInfo = {
      name: interaction.user.username,
      tag: interaction.user.tag,
      accountAge: createdDate,
      avatar: interaction.user.avatarURL(),
    }

    interaction.reply({
      embeds: [
        new MessageEmbed()
          .setColor('#C219D8')
          // .setThumbnail(`${userInfo.avatar}`)
          .setTitle(`${userInfo.name}`)
          .addFields(
            {
              name: 'Tag',
              value: `${userInfo.tag}`,
              inline: true,
            },
            {
              name: 'Created at',
              value: `${userInfo.accountAge}`,
              inline: true,
            }
          )
          .setImage(`${userInfo.avatar}`),
      ],
    })
  },
}
