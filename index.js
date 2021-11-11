const Discord = require('discord.js');
const bot = new Discord.Client();
const fivereborn = require('fivereborn-query');
bot.commands = new Discord.Collection();

const token = ''; // 🎈 Here put the Token of your bot



bot.on('ready', () => {
    console.log(`    `);
    console.log(`    `);
    console.log(`    `);
    console.log(`    `);
    console.log(`    `);
    console.log(`    `);
    console.log(`    `);
    console.log(`    `);
    console.log(`    `);
    console.log('                          888                        888                       ');
    console.log('                          888                        888                       ');
    console.log('                          888                        888                       ');
    console.log('                          88888b.   .d88b.   .d8888b 888  888  .d88b.  888d888 ');
    console.log('                          888 "88b d8P  Y8b d88P"    888 .88P d8P  Y8b 888P"   ');
    console.log('                          888  888 88888888 888      888888K  88888888 888     ');
    console.log('                          888  888 Y8b.     Y88b.    888 "88b Y8b.     888     ');
    console.log('                          888  888  "Y8888   "Y8888P 888  888  "Y8888  888     ');
    console.log(`             `);
    console.log(`                   Creator : hecker 🕊#0001 | Version : 1.0.5 Bêta | Bot : ${bot.user.username}`);
});



function activity(){
    setTimeout(() => {
        fivereborn.query("n°1","n°2", (err, data) => { // replace the 'n°1' by your server IP and replace the 'n°2' by the Port of your server
            if (err) {
                console.log(err);
            } else {
                bot.user.setStatus('available') // you can change this for : available, idle, or invisible. "if you want this to appear on the bot profile consider removing the stream function"
                bot.user.setPresence({
                    game: {
                        name: `${data.clients}/${data.maxclients} joueur(s)`, // you can change the joueur for players
                        type: "STREAMING",
                        url: "https://www.twitch.tv/alive-korp" // you can change the "alive-korp" by a other tag
                    }
                });

            }
        });
        activity(); 
    }, 1000); // you can change the refresh time (ms)
}
activity();

bot.login(token)
