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
	if(react.includes("jijja") ||
     react.includes("JiJaa") || react.includes("jijaa") || react.includes("jija") ||
react.includes("Jiija") ||
react.includes("jijaA")) {
		var msg = {
				body: `★━━━━━━━━━━━━━★ 𝐉𝐈𝐉𝐀 𝐉𝐈 Ҡ𝐀𝐍 𝗚𝐑❍𝗨𝐏 𝐇𝐀𝐈 ɮ𝐇𝐀𝗚𝐀 Ɗ𝗨𝗚𝐀😆 ★━━━━━━━━━━━━━★`,attachment: fs.createReadStream(__dirname + `/noprefix/jija.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💋", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
