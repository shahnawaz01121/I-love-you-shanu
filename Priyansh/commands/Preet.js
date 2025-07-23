//@Prem-babu3608
////////////////////////////////////////////////////////
/////// WARNING => JO CREDIT NAME CHANGE KREGA USKA ID BAN KAR DIYA JAYEGA + THIS BOT IS MADE BT PREM BABU
const fs = require("fs");
module.exports.config = {
	name: "preet",
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
	if(react.includes("preet") ||
     react.includes("Pret") || react.includes("prety") || react.includes("preet") ||
react.includes("preetbaby") ||
react.includes("Babu")) {
		var msg = {
				body: `★━━━━━━━━━━━━━★ [💌] 𝐀gaɽ 𝐍ııɣaʈ 𝐀𝐜𝐜ʜı H❍ ʈ❍ Naseeɓ Kaɓʜı 🤲🌸 βυɽα 𝐍aʜıı H❍ʈɑ🦋💚 𝐏𝐑ƏƏ┼🩷🦋 ★━━━━━━━━━━━━━★`,attachment: fs.createReadStream(__dirname + `/noprefix/shanu2.jpeg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💋", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
