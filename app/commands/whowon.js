const Command = require("../structures/command.js");

module.exports = new Command({
    name: "whowon",
    description: "decides by chance who wins a custom match in league",

    async run(message, args, client) {

        const teams = ["red side", "blue side"];

        const random = Math.floor(Math.random() * 2);

        message.reply(teams[random])

    }
});

