const {Client, GatewayIntentBits} = require("discord.js");

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on('messageCreate', (message) => {
    if(message.author.bot) return;
    if(message.content.startsWith("create")){
        const url = message.content.split("create")[1];
        return message.reply({
            content: "Generating Short ID for " + url,
        });
    }
    message.reply({
        content: "Salam from Bot",
    })
});

client.login(
    process.env.BOT_GAVE_TOKEN
)

client.on('interactionCreate', (interaction)=> {
    console.log(interaction);
    interaction.reply('Pong!!');
})