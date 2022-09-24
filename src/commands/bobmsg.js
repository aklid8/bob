const Command = require('../structures/command.js');

module.exports = new Command({
    name: 'bobmsgdev',
    description: "(DEVELOPERS ONLY) syntax: bob_msg_dev [channel id], \"[content]\"",

    async run(message, args, client) {
        const interpConsoleID = 1002007044439678976

        var commandContent = message.toString()
        var channelIDInput = commandContent.substring(commandContent.indexOf(' ') + 1, commandContent.indexOf(','))
        console.log("[MSG CMD, TARGET CHANNEL:]" + channelIDInput)
        var messageContent = commandContent.substring(commandContent.indexOf('"') + 1, commandContent.lastIndexOf('"'))
        console.log("[MSG CMD, MESSAGE CONTENT:]" + messageContent)
        var targetChannelID = client.channels.cache.get(channelIDInput);


        if (message.channel.id != interpConsoleID) return message.channel.send("no");


        try {
            targetChannelID.send(messageContent)
        }
        catch {
            console.log("[MSG CMD, ERROR]")
        }

    }

});
