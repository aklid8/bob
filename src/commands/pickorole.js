const Command = require("../structures/command.js");

module.exports = new Command({
    name: "pickorole",
    description: "gives you a random League of Legends role to go",

    async run(message, args, client) {

        message.reply("mid")

    }
});