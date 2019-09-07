const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("619978628985258016")
setInterval(function() {
channel.send(`yousef gamd of a7 heheheheheh`);
}, 30)
})

client.login(process.env.BOT_TOKEN);