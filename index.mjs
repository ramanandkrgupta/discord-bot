import 'dotenv/config'
import { Client, GatewayIntentBits } from 'discord.js';

const client = new Client({ intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
] });

client.on('messageCreate', (message) => {
    if(message.author.bot) return;
    if (message.content.startsWith("create")) {
        const url = message.content.split("create") [1]
        return message.reply({
            content: "Generating Short ID For " + url,
        });
    }
    message.reply({
        content: 'hi from bot'
    })
})

client.on('interactionCreate', interaction => {
    interaction.reply("Pong!!")
})

client.login(process.env.BOT_TOKEN)