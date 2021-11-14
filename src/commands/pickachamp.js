const Command = require("../structures/command.js");

module.exports = new Command({
    name: "pickachamp",
    description: "picks a random lol champion out of a pool of over 20",

    async run(message, args, client) {

        const champ = ["Akali", "Teemo", "Ahri", "Xayah", "Rakan", "Veigar", "Pyke", "Lillia", "Yasuo", "Yone", "Kindred", "Miss Fortune", "Caitlyn", "ASol", "Zoe", "Mordekaiser", "Morgana", "Lux", "Anivia", "Talon", "Ashe", "Evelynn", "Bard", "Cho'Gath"];

        const random = Math.floor(Math.random() * 23);

        message.reply(champ[random])

    }
});

