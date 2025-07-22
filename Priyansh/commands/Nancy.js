//@Prem-babu3608
////////////////////////////////////////////////////////
/////// WARNING => JO CREDIT NAME CHANGE KREGA USKA ID BAN KAR DIYA JAYEGA + THIS BOT IS MADE BT PREM BABU
const fs = require("fs");
module.exports.config = {
	name: "nancy",
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
	if(react.includes("nancy") ||
     react.includes("Nancyy") || react.includes("nanccy") || react.includes("nancy") ||
react.includes("Nancybaby") ||
react.includes("Babu")) {
		var msg = {
				body: `★━━━━━━━━━━━━━★ 𝐍𝐀𝐍𝐂Ɣ ɮ𝗨𝐒Ɣ 𝐇𝐀𝐈 𝐌𝗨𝐉𝐇Ə ɮ❍𝐋❍ ҠƏƔ𝐀 Ҡ𝐀𝐌 𝐇 ★━━━━━━━━━━━━━★`,attachment: fs.createReadStream(__dirname + `/noprefix/shahnawaz2.jpeg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💋", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
