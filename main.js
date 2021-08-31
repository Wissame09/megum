const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong !');
  }
});

client.login('ODgxOTA1ODEwODU3Mzk0MjU3.YSzoyg.BHMvj5kdSi0v0vBi19R18pz8NZA');