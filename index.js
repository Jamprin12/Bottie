require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();

// Initialitation
bot.on('ready', async () => {
    await console.log('Bot is ready as', bot.user.username);
});

bot.on('message', async msg => {
    const servers = ["skyzora.aternos.me"]
    // Receiving  the messages
    if (msg.content === "!servers") {
        if (!servers.length) {
            msg.channel.send('No hay servidores')
        } else {
            msg.channel.send(servers)
        }
    }

    if (msg.content.startsWith('!server add')) {
        const msgBasic = msg.content.split(' ');
        const serverName = msgBasic[2];
        servers.push(serverName);
        msg.channel.send('Ya ha sido agregado el servidor ' + msgBasic)
    }

    if (msg.content === "!pin") {
        msg.channel.send('https://pinterest.com/');
    }

    if (msg.content === "!insta") {
        msg.channel.send('https://instagram.com/');
    }

});

bot.on('guildMemberAdd', async (member) => {
    // Send the message to a designated channel on a server:
    const channel = await member.guild.channels.cache.find(ch => ch.name === 'member-log');
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
    channel.send(`Welcome to the server, ${member}`);
});


bot.login(`${process.env.DISCORD_TOKEN}`);