'use strict';
// Import the discord.js module
const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === 'I challenge you to a duel') {
    message.channel.send('Are you sure you want to do this?');
    client.on('message', message=> {
      if(message.content ==="Yes"){
        message.channel.send('Ok');
      }
    })
  }
});


client.login('Token');
