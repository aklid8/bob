const Command = require("../structures/command.js");

module.exports = new Command({
    name: "ping",
    description: "shows the ping of the bot",

    async run(message, args, client) {

        message.reply(`Ping: ${client.ws.ping} ms.`);

    }
});

