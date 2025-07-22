//@Prem-babu3608
////////////////////////////////////////////////////////
/////// WARNING => JO CREDIT NAME CHANGE KREGA USKA ID BAN KAR DIYA JAYEGA + THIS BOT IS MADE BT PREM BABU
const fs = require("fs");
module.exports.config = {
	name: "golgappe",
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
	if(react.includes("pani") ||
     react.includes("Pani") || react.includes("pani") || react.includes("pani") ||
react.includes("Pani") ||
react.includes("Paani")) {
		var msg = {
				body: `★━━━━━━━━━━━━━★𝐋❍ 𝐏𝐈𝐈 𝐋❍ 𝐌Ə𝐑𝐈 𝐉𝐀𝐀𝐍 𝐏𝐀𝐍𝐈💋🍶★━━━━━━━━━━━━━★`,attachment: fs.createReadStream(__dirname + `/noprefix/Pani1.jpeg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💋", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
