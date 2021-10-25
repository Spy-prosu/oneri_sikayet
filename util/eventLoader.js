const reqEvent = (event) => require(`../events/${event}`);///Spy Code
module.exports = Guard => {
  Guard.on('ready', () => reqEvent('ready')(Guard));///Spy Code
  Guard.on('message', reqEvent('message'));///Spy Code
};

