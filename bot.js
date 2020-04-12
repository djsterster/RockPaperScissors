'use strict';
// Import the discord.js module
const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  console.log('I am ready!');
});
var res = '';
var n = 0;

function result (answer, response){
  if(response.toLowerCase() === "rock"){
    if(answer = "Rock"){
      return("Dang, we tied");
  }else if(answer = "Paper"){
    return("Haha, I won");}
    else{
      return("awww, I lost");}
  }
  if(response.toLowerCase() === "paper"){
    if(answer = "Rock"){
      return("awww, I lost");}
    else if(answer = "Paper"){
      return("Dang, we tied");
    }
    else{
      return("Haha, I won");}
  }
  if(response.toLowerCase() === "scissors"){
    if(answer = "Rock"){
      return("Haha, I won");}
    else if(answer = "Paper"){
      return("awww, I lost");}
    else{
      return("Dang, we tied");
      }
    }
  else{
    return("Hey, something fishy's going on!");
  }
}
client.on('message', message => {
  if(message.author.bot) return;
	if(message.content === '!rps'){
    console.log("Res at Beginning" + res);
    message.channel.send('Rock');
    setTimeout(function(){ message.channel.send('Paper'); }, 1000);
    setTimeout(function(){ message.channel.send('Scissors'); }, 2000);
    setTimeout(function(){ message.channel.send('Shoot!'); }, 3000);
    setTimeout(function(){
    console.log("Debug 1");
    n = Math.random() * 3;
    if(n<1){
      message.channel.send('Rock');
      res = "Rock";
      console.log("Debug 2");
    }
    else if(n<2){
      message.channel.send('Paper');
      res = "Paper";
      console.log("Debug 3");
    }
    else {
      message.channel.send('Scissors');
      res = "Scissors";
      console.log("Debug 4");
    }
    client.on('message', message => {
      if(message.author.bot) return;
      message.channel.send(result(res, message.content));
    });
    }, 4000);
    console.log("Res after response" + res);

  setTimeout(function(){
  res = '';
  n = 0;
  console.log("Res at end" + res);
  }, 6000);
  }
});

client.login('TOKEN HERE');
