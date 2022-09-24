const Command = require("../structures/command.js");

module.exports = new Command({
    name: "addrolemod",
    description: "adds a role",

    async run(message, args, client) {

        if (!message.member.permissions.has("MANAGE_ROLES")) return message.channel.send("no");

        const target = message.mentions.members.first();
        if (!target) return message.channel.send("but to who?");
        const role = message.mentions.roles.first();
        if (!role) return message.channel.send("what, you want me to come up with a role myself?");

        await target.roles.add(role);
        message.channel.send(`${target.user.username} has a shiny new role!`);

    }

});
