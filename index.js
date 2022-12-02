const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv/config');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});
client.on('ready', () => {
    console.log('The bot is ready');
});
client.on('messageCreate', message => {

    if (message.content === 'list') {
        message.reply('ping\nricky\nlahey\njim\nsweet\ndrink\nknock knock\nfran\nhand\nfav');
    }
    if (message.content === 'ping') {
        message.reply('pong');
    }
    if (message.content === 'ricky') {     
        message.reply({ files: [{ attachment: 'ricky.jpg' }] }); 
    }
    if (message.content === 'lahey') {
        message.reply({ files: [{ attachment: 'jim.jpg'}]});
    }
    if (message.content === 'jim') {
        message.reply({ files: [{ attachment: 'lahey.gif'}]});
    }
    if (message.content === 'sweet') {
        message.reply({ files: [{ attachment: 'ricky2.gif'}]});
    }
    if (message.content === 'drink') {
        message.reply({ files: [{ attachment: 'drunkjim.gif'}]});
    }
    if (message.content === 'knock knock') {
        message.reply({ files: [{ attachment: 'knockknock.gif'}]});
    }
    if (message.content === 'fran') {
        message.reply({ files: [{ attachment: 'farmerfran.gif'}]});
    }
    if (message.content === 'hand') {
        message.reply({ files: [{ attachment: 'stronghand.gif'}]});
    }
    if (message.content === 'fav') {
        message.reply({ files: [{ attachment: 'laugh.gif'}]});
    }
});
client.login(process.env.TOKEN);




