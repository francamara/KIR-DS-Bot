import discordJs, {Intents} from 'discord.js'
import colors from 'colors'
import dotenv from 'dotenv'
dotenv.config()

// TODO: Commands Handler to have them in the ../commands directory
// video: https://www.youtube.com/watch?v=yIbmmBGOAO4&t=3s


const token = process.env.APP_TOKEN
const guildId = process.env.GUILD_ID

const client = new discordJs.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on('ready', () => {
    console.log(colors.white.bgCyan('Bot ready to keep it rolling'));
})


client.on('messageCreate', (message) => {
    if(message.content === 'KIR') {
        message.reply({ content: 'keep it rolling man'})
    }
    
    let guild = client.guilds.cache.get(guildId);

    let commands

    if(guild) {
        commands = guild.commands
    } else {
        commands = client.application.commands
    }

    commands.create({ 
        name: 'kir',
        description: 'Keep it rolling',
    })
})

client.on('interactionCreate', async (interaction) => {

    if (!interaction.isCommand()) {
        return
    }

    const { commandName, options} = interaction

    if (commandName === 'kir') {
        interaction.reply({ 
            content: 'Keep it rolling',
        })
    }
})

// https://www.youtube.com/watch?v=pXehoXnFxPM
// minute 5


client.login(token)
