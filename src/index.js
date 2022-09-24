console.clear();


const Client = require("./structures/client.js");
const Command = require("./structures/command.js");

const config = require("./data/config.json");




const client = new Client();

client.on("ready", () => {
    console.log("[bob has awaken]")

    const theganglog = client.channels.cache.get("907822900151717900")
    theganglog.send("I'm excited for another good time of eating Blunt Bars™!")
    const daboislog = client.channels.cache.get("928880691058471003")
    daboislog.send("im back, bitches")
});

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

    console.log(message.content);

    const generalChannel = client.channels.cache.get("907822900151717900")
    const daboisHQ = client.channels.cache.get("928880691058471003")




    if (message.content == "heck") message.reply("Hello, if you decide to curse this server with that type of foul language, your home may be on my list of things to burn down. Thank you for your time.");

    if (message.content == "steve") message.reply("Steve is dead and I killed him.");

    if (message.content == "i'm hungry") message.reply("Hi hungry, I'm Bob.");

    if (message.content == "rip steve") message.reply("Steve is not resting in peace. He never got to see the light of the gang chat because of me and he is a tortured soul in the afterlife.");

    if (message.content == "what da dog doin") message.reply("ur mom");

    if (message.content == "i think bob might be a wrongun") message.reply("Oh, but it is too late now. You cannot stop me.");

    if (message.content == "is steve hostage") message.reply("yes");

    if (message.content == "bob diff" || message.content == "this is bob's fault") message.reply("Does it look like I care?");

    if (message.content == "dont care + didnt ask + ratio" || message.content == "don't care + didn't ask + ratio") message.delete();

    if (message.content.toLowerCase() == "fuck you" || message.content.toLowerCase() == "fuck you bob" || message.content.toLowerCase() == "stfu" || message.content.toLowerCase == "stfu bob" || message.content.toLowerCase() == "shut the fuck up" || message.content.toLowerCase() == "shut the fuck up bob" || message.content.toLowerCase() == "shut up" || message.content.toLowerCase() == "shut up bob") message.channel.send("fuck you too");

    if (message.content.toLowerCase() == "taiwan is a country" || message.content.toLowerCase() == "free tibet" || message.content.toLowerCase() == "genocide in xinjiang" || message.content.toLowerCase() == "free hong kong" || message.content.toLowerCase() == "uyghur oppression") {

        message.channel.send("像这样的危险谣言不允许在此服务器上。");
    }

    if (!message.content.startsWith(config.prefix)) return;



    const args = message.content.substring(config.prefix.length).split(/ +/);

    const command = client.commands.find(cmd => cmd.name == args[0]);

    if (!command) return message.reply(`${args[0]} isn't a command, you idiot.`);

    command.run(message, args, client);
});


"Almost before we knew it, we had left the ground."

//put client login at the very end of this file obviously
client.login(config.token);
