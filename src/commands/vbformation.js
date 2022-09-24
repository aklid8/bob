const Command = require("../structures/command.js");


module.exports = new Command({
    name: "vbformation",
    description: "gives you the correct volleyball formation based on the number of players you choose",

    async run(message, args, client) {
        commandContent = message.toString();
        
        numPeople = Number(commandContent.substring(13))

        console.log(numPeople);
        if(numPeople < 1){
            return message.channel.send("you can't play a game without anybody at all")
        }
        else if (numPeople == 1){
            return message.channel.send("just do a rally");
        }
        else if (numPeople == 2){
            return message.channel.send("~ X\n\n   X");
        }
        else if (numPeople == 3){
            return message.channel.send("~   X\n\nX      X");
        }
        else if (numPeople == 4){
            return message.channel.send("~    X\n\nX   X   X");
        }
        else if (numPeople == 5){
            return message.channel.send("~    X\nX         X\n   X   X");
        }
        else if (numPeople == 6){
            return message.channel.send("X   X   X\n\nX   X   X");
        }
        else if (numPeople > 6){
            return message.channel.send("too much");
        }
        else{
            message.channel.send("that isn't even a number.");
        }

    }

});
