const Discord = require("discord.js");
const config = require('../config.json');
let talkedRecently = new Set();

module.exports = message => {
  if (talkedRecently.has(message.author.id)) {
    return;
  }
  talkedRecently.add(message.author.id);
	setTimeout(() => {
    talkedRecently.delete(message.author.id);///Spy Code
  }, 0);
  let client = message.client;
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
  let command = message.content.split(' ')[0].slice(config.prefix.length);///Spy Code
  let params = message.content.split(' ').slice(1);///Spy Code
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));///Spy Code
  }
  if (cmd) {
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);///Spy Code
  }

  
let prefixes = [];
    let prefix = "";
    for (var i = 0; i < prefixes.length; i++) {
      if (message.content.startsWith(prefixes[i])) prefix = prefixes[i];
    }
    
   
};
