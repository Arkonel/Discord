const Discord = require('discord.js');
const bot = new Discord.Client();
 
bot.on('message', (message) => {
    
    if(message.content == "Fairy-Bot"){
        message.channel.send('Hi, im a bot heres a list of my current commands:\n!macro');
    }  
    if(message.content.toLowerCase() == "poke"){
        message.channel.send('ouchy');
    
    }
    
    if(new RegExp('^!macro').exec(message.content)){
 
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
    
});
 
bot.login(process.env.BOT_TOKEN);
