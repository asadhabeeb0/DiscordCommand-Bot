const {REST , Routes} = require("discord.js");

const commands = [
    {
        name: "create",
        description: "Creates a new short URL",
    },
];

const rest = new REST ({ version: "10"}).setToken(process.env.ACCESS_TOKEN);

(async () => {
    try {
        console.log("Started refreshing application (/) commands.");

        await rest.put(Routes.applicationCommands("1174659105332400200"), {body:commands,});
        
        console.log("Successfully reloaded application (/) commands.");

    } catch (error) {
        console.error(error);
    }
})();
