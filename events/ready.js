const Discord = require("discord.js");///Spy Code
const chalk = require('chalk');
const moment = require('moment');///Spy Code
const config = require("../config.json");///Spy Code

module.exports = client => {
client.user.setPresence({ activity: {name: config.Ready, type: config.ReadyType,}, status: config.ReadyStatus})
console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
let channel = client.channels.cache.get(config.SesKanalı);
channel.join()
};
