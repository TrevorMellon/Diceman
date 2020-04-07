//dotenv
require('dotenv').config();

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
        if(v.length == 2)
        {
            var x = v[1];
            console.log("number of rolls:"  + x);
            var xi = parseInt(x);

            var r = Math.floor((Math.random() * xi) + 1);
            msg.reply("Using a "+xi+"-sided die, you rolled: " + r);
        }
        else if(v.length == 3) {
            var x = v[1];
            var rolls = v[2];
            var xi = parseInt(x)
            var rollsi = parseInt(rolls);

            var strmsg = "Using a " + xi + "-sided die. \n"
            strmsg +=    "============================\n"

            var count = 0;

            for(var i = 0; i<rollsi; i++) {
                var r = Math.floor((Math.random() * xi) + 1);
                //msg.reply("Using a "+xi+"-sided die, you rolled: " + r);
                strmsg += "Roll #" + (i+1) + ": " + r +"\n";
                count += r;
            }
            strmsg += "============================\n"
            strmsg += "\nTotal Amount: " + count + "\n";

            msg.reply(strmsg);
        }
        else {
            var r = Math.floor((Math.random() * 6) + 1);
            msg.reply("Using a 6-sided die, you rolled: " + r);
        }
    }
    
});