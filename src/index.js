console.clear();


const { Client, GatewayIntentBits } = require("discord.js");

// Custom client class
const ClientClass = require("./structures/client.js");
const Command = require("./structures/command.js");
const config = require("./data/config.json");

// Client with appropriate intents
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent, // Needed to read message content
    ],
});

client.on("ready", () => {
    console.log("[bob has awaken]");

    const theganglog = client.channels.cache.get("907822900151717900");
    if(theganglog) theganglog.send("I'm excited for another good time of eating Blunt Bars™!");
    const daboislog = client.channels.cache.get("928880691058471003");
    if(daboislog) daboislog.send("im back, bitches");
});

client.commands = new Map();
const fs = require("fs");

fs.readdirSync("./src/commands")
    .filter(file => file.endsWith(".js"))
    .forEach(file => {
        /**
         * @type {Command}
         */
        const command = require(`./commands/${file}`);

        console.log(`Command ${command.name} loaded`);

        client.commands.set(command.name, command);

    });


client.on("messageCreate", message => {
    // Log the message content
    console.log(message.content);

    // Example channels
    const generalChannel = client.channels.cache.get("907822900151717900");
    const daboisHQ = client.channels.cache.get("928880691058471003");

    // Predefined responses
    const responses = {
        "heck": "Hello, if you decide to curse this server with that type of foul language, your home may be on my list of things to burn down. Thank you for your time.",
        "steve": "Steve is dead and I killed him.",
        "i'm hungry": "Hi hungry, I'm Bob.",
        "rip steve": "Steve is not resting in peace. He never got to see the light of the gang chat because of me and he is a tortured soul in the afterlife.",
        "what da dog doin": "ur mom",
        "i think bob might be a wrongun": "Oh, but it is too late now. You cannot stop me.",
        "is steve hostage": "yes",
        "bob diff": "Does it look like I care?",
        "this is bob's fault": "Does it look like I care?",
    };

    if (responses[message.content]) {
        message.reply(responses[message.content]);
        return;
    }

    // Specific conditions
    if (message.content.toLowerCase() === "taiwan is a country" ||
        message.content.toLowerCase() === "free tibet" ||
        message.content.toLowerCase() === "genocide in xinjiang" ||
        message.content.toLowerCase() === "free hong kong" ||
        message.content.toLowerCase() === "uyghur oppression") {
        message.channel.send("像这样的危险谣言不允许在此服务器上。");
        return;
    }

    if (message.content.toLowerCase() === "dont care + didnt ask + ratio" ||
        message.content.toLowerCase() === "don't care + didn't ask + ratio") {
        message.delete();
        return;
    }

    if (message.content.toLowerCase().includes("fuck you") || message.content.toLowerCase().includes("stfu") || message.content.toLowerCase().includes("shut up")) {
        message.channel.send("fuck you too");
        return;
    }

    // Command execution
    if (!message.content.startsWith(config.prefix)) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName);
    if (!command) {
        message.reply(`${commandName} isn't a command, you idiot.`);
        return;
    }

    try {
        command.run(message, args, client);
    } catch (error) {
        console.error(error);
        message.reply("error executing command. go pester colin.");
    }
});

});


"Almost before we knew it, we had left the ground."

//put client login at the very end of this file obviously
client.login(config.token);
