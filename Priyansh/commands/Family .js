//@Prem-babu3608
////////////////////////////////////////////////////////
/////// WARNING => JO CREDIT NAME CHANGE KREGA USKA ID BAN KAR DIYA JAYEGA + THIS BOT IS MADE BT PREM BABU
const fs = require("fs");
module.exports.config = {
	name: "Family",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "PREM BABU", ////////@prem-babu3608
	description: "THIS BOT IS MR PREM SHARMA",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("familyy") ||
     react.includes("faamily") || react.includes("family") || react.includes("Bro") ||
react.includes("FAMILY") ||
react.includes("Bhai")) {
		var msg = {
				body: `💯☠️बरबाद कर देंगे उस हस्ती को जब बात परिवार पर आएगी 😈🤬`,attachment: fs.createReadStream(__dirname + `/noprefix/aaa.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💋", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
