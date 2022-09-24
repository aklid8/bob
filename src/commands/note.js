const Command = require("../structures/command.js");


module.exports = new Command({
    name: "note",
    description: "sets a time anyone can access",

    async run(message, args, client) {

        var commandContent = message.toString();

        var commandInput = commandContent.substring(6);




        if (commandInput != "access"){
            note = commandContent.substring(6);
            return message.channel.send("note has been set to \"" + note + "\"");
        }
        else if (commandInput == "access") {
            return message.channel.send(note);
        }
        else{
            message.channel.send("an error has occurred.");
        }
        

        

        


    

        
            



    }

});
