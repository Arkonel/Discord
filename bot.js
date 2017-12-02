const Discord = require('discord.js');
const bot = new Discord.Client();
 
bot.on('message', (message) => {
    
    if(message.content == "Fairy-Bot"){
        message.channel.send('Hi, im a bot heres a list of my current commands:\n!macro\n!rps');
    }  
    if(message.content.toLowerCase() == "poke"){
        message.channel.send('ouchy');
    
    }
    if(message.content == "!rps"){
        message.channel.send('Rock Paper Scissors! Type !rps (:fist:/:v:/:raised_hand:) to play!');
    }
    if(message.content == "!rps :fist:"){
        message.channel.send(':raised_hand: Paper beats rock! I win!');
    }   
    if(message.content == "!rps :v:"){
        message.channel.send(':fist: Rock beats scissors! I win!');
    }  
    if(message.content == "!rps :raised_hand:"){
        message.channel.send(':fist: Paper beats rock! You win....');
    }  
    if(new RegExp('^!macro').exec(message.content) ){
 
        var data = message.content.toLowerCase().split(' ');
        if(data.length == 1) {
            message.channel.send(' \nList of commands for macro:\nWeaponGlow');
        } else switch (data[1]) {
            case 'weaponglow':        
            message.channel.send("Weapon glow:\n/bm\n/sit");
            break;
            case 'protect':
            message.channel.send("Protect: (in progress)");
        }
 
    }
    if(new RegExp('^!repeat').exec(message.content) ){
 
        var data = message.content.toLowerCase().split(' ');
        message.channel.send(data[1]);
 
    }
});
 
bot.login(process.env.BOT_TOKEN);
