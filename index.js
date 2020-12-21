const Discord = require("discord.js");
const conf = require("./conf.json");

const prefix = "!"

const client = new Discord.Client();

client.on("message", function(message) {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();

    if (command === "pog") {
        message.channel.send("POG!");
    }
    if (command === "poggers") {
        message.channel.send("POGGERS!");
    }
});

client.login(conf.token);