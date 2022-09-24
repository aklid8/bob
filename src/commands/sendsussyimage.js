const Command = require("../structures/command.js");

module.exports = new Command({
    name: "sendsussyimage",
    description: "sends u an image of dick's",

    async run(message, args, client) {

        message.reply("https://cdn.discordapp.com/attachments/932874842787692609/933571720374263828/OIP.png");

    }
});

