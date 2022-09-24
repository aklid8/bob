const Command = require("../structures/command.js");

module.exports = new Command({
    name: "pickarole",
    description: "gives you a random League of Legends role to go",

    async run(message, args, client) {

        const lolRoles = ["top", "jgl", "mid", "adc", "sup"];
        // Random number from 0 to 2 for the array index
        const random = Math.floor(Math.random() * lolRoles.length);

        message.reply(lolRoles[random])

    }
});