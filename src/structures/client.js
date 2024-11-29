const { Client, GatewayIntentBits } = require("discord.js");

class CustomClient extends Client {
    constructor() {
        super({
            intents: [
                GatewayIntentBits.Guilds,
                GatewayIntentBits.GuildMessages,
                GatewayIntentBits.MessageContent,
            ],
        });
        this.commands = new Map();
    }
}

module.exports = CustomClient;
