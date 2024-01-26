require('dotenv').config()
const { Client, GatewayIntentBits, Partials } = require('discord.js');
const openai = require('./openai')
const countTokens = require('./count-tokens')
const token = process.env.DISCORDTOKEN

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
    ],
});

client.on("ready", () =>{
    console.log("Bot is online");
});

client.on("messageCreate", async (message) =>{
if(message.channel.name !== "aibot" || message.author.bot) {
    return
}

message.channel.sendTyping()

const messages = (
    await message.channel.messages.fetch({limit: 25})
).reverse();

const BotMessages = [];
const maxTokens = 4096;
let TokensCount = 0;

messages.forEach(() => {
    const tokens = countTokens(message.content);

    if(TokensCount + tokens < maxTokens) {
        TokensCount += tokens;

        BotMessages.push({
            role: message.author.bot ? 'assistant' : 'user',
            content: message.content,
        })
    }
})

let response = await openai(BotMessages)
const discordMaxcharacters = 2000 - 3;

    if(response.content.length > discordMaxcharacters) {
    response = response.content.slice(0, discordMaxcharacters).padEnd(2000, '...');
    message.channel.send({
        content: response,
    })
}else{
    message.channel.send({
        content: response.content,
    })
}

});

client.login(token);