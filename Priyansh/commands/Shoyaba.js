//@Prem-babu3608
////////////////////////////////////////////////////////
/////// WARNING => JO CREDIT NAME CHANGE KREGA USKA ID BAN KAR DIYA JAYEGA + THIS BOT IS MADE BT PREM BABU
const fs = require("fs");
module.exports.config = {
	name: "Shoyaba",
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
	if(react.includes("Shoyaba") ||
     react.includes("shoyabaa") || react.includes("Shoyyaba") || react.includes("Shoyabba") ||
react.includes("Shoyabababy") ||
react.includes("Babu")) {
		var msg = {
				body: `★━━━━━━━━━━━━━★ Me tumhare ago ke 2 daat jesi hu 
Chali gyi na to kabhi has nhi paoge 🤣 ★━━━━━━━━━━━━━★`,attachment: fs.createReadStream(__dirname + `/noprefix/shanu1.jpeg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💋", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
