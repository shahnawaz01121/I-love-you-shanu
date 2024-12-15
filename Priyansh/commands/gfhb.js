const fs = require("fs");
module.exports.config = {
	name: "gf",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "virat babu", 
	description: "gf",
	commandCategory: "no prefix",
	usages: "virat",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("GM")==0 || event.body.indexOf("gm")==0 || event.body.indexOf("Good morning")==0 || event.body.indexOf("GOOD MORNING")==0) {
		var msg = {
				body: "😁 LE gf Ab dobara gf gf mat karna🤨😁",
				attachment: fs.createReadStream(__dirname + `/noprefix/gf.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🎃", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
