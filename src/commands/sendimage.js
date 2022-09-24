const Command = require("../structures/command.js");

module.exports = new Command({
    name: "sendimage",
    description: "sends u an image!",

    async run(message, args, client) {

        const images = ["https://cdn.discordapp.com/attachments/907819655790477343/939716229361467392/Vincent_Ming_Hong_Ng.png", "https://cdn.discordapp.com/attachments/932874842787692609/933570263050772510/unknown.png", "https://cdn.discordapp.com/attachments/932874842787692609/933570263050772510/unknown.png", "https://cdn.discordapp.com/attachments/932874842787692609/933570263050772510/unknown.png", "https://cdn.discordapp.com/attachments/932874842787692609/933570263050772510/unknown.png", "https://cdn.discordapp.com/attachments/932874842787692609/933570263050772510/unknown.png", "https://cdn.discordapp.com/attachments/932874842787692609/933570263050772510/unknown.png", "https://cdn.discordapp.com/attachments/932874842787692609/933570263050772510/unknown.png", "https://cdn.discordapp.com/attachments/932874842787692609/933570263050772510/unknown.png", "https://cdn.discordapp.com/attachments/932874842787692609/933570263050772510/unknown.png"];

        const random = Math.floor(Math.random() * images.length);

        message.reply(images[random]);

    }
});

