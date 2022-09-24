const Command = require("../structures/command.js");

module.exports = new Command({
    name: "storytime",
    description: "bob tells you as story!",

    async run(message, args, client) {

        const stories = ["Here's a good one. One upon a time, I did your mom. The end.", "Ah yes, I have a good tale. Once upon a time, there was a boy who lived in the great United Soviet Socialist Republics, the Soviet Union. He was a very good communist boy and would like to read the great works of the socialist thinkers of his time. He was known to be extremely loyal to the state and revered the USSR's great leader, Nikita Khrushchev. However, one day, he saw a hooded woman approach him in the streets and she walked up to him and started to talk to him. She said, \"Things may seems fine here, but in reality, it's much worse than you thought. In the western capitalist nations, they can speak whatever they want without fear, don't havew to worry about money, and in America, our supposed enemy, even the poor people are fat! We know your strong loyalty to the state, and with that you have privileges most of us don't. You can help us make a change, make people richer, and freer, if you help us overthrow our corrupt government. I know you're a good person at heart, and that you'll do the right thing.\" With that, she handed him a card with her rebel group's name and the address of their headquarters. The boy thought about what she said, \"do the right thing\", and he resolved that he would do the right thing. So, in the dead of night, the loyal communist boy reported the rebels to the secret police and all of the capitalist traitors were arrested, with the boy being generously rewarded. The end."];

        const random = Math.floor(Math.random() * stories.length);

        message.reply(stories[random])

    }
});