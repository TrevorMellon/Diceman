//dotenv
require('dotenv').config();

util = require('./util/dice.js');

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
});

client.login(process.env.DISCORD_TOKEN);

client.on('message', msg => {
    var mm = msg.content;
    m = mm.toString().toLowerCase();
    var v = m.split(" ");

    console.log("Message Tokens:" + v);
    console.log("User Token:" + client.user);

    if (v.length < 1) {
        return;
    }
   
    if(v[0] === 'ping') {
        msg.reply('pong');
    }
    else if(v[0] === '!roll') {
        util.roll(msg);
    }
    else if(v[0] === '!dice') {
        util.dice(msg);
    }
    
});