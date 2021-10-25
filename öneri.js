const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const { Client, MessageEmbed } = require('discord.js');
require('./util/eventLoader.js')(client);
Discord.Constants.DefaultOptions.ws.properties.$browser = "Discord Android"///Spy Code

  client.on("message", message => {
    if (message.channel.type === "dm") {
        if (message.author.bot) return;
        const dmlog = new Discord.MessageEmbed()
         .setAuthor(client.user.username, client.user.avatarURL())
         .setTitle(` - ${message.author.tag} - İsimli Üye Bir Öneri & Şikayet Mesajı Gönerdi.`)///Spy Code
         .setColor(config.renk)///Spy Code
         .addField('Kullanıcı ID', ` - ${message.author.id} - `)///Spy Code
         .addField('Kullanıcı',` - <@${message.author.id}> - `)///Spy Code
         .addField(`Öneri & Şikayet Mesajı İse`, message.content)///Spy Code
         .setFooter(config.footer)
         .setThumbnail(message.author.avatarURL())
         .setTimestamp()
    client.channels.cache.get(config.öneriLog).send(dmlog);///Spy Code
    }
});



    var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
    client.on('warn', e => {
        console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));///Spy Code
    });///Spy Code
    
    client.on('error', e => {
        console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));///Spy Code
    });
client.login(config.token)///Spy Code