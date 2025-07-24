//@Prem-babu3608
////////////////////////////////////////////////////////
/////// WARNING => JO CREDIT NAME CHANGE KREGA USKA ID BAN KAR DIYA JAYEGA + THIS BOT IS MADE BT PREM BABU
const fs = require("fs");
module.exports.config = {
	name: "jaani",
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
	if(react.includes("yaari") ||
     react.includes("Jigrii") || react.includes("jigri") || react.includes("jaani") ||
react.includes("Jaani") ||
react.includes("bhai")) {
		var msg = {
				body: `★━━━━━━━━━━━━━★ 𝐉𝐈𝗚𝐑𝐈 Ɣ𝐀𝐀𝐑 Ҡ𝐀 𝗚𝐑❍𝗨𝐏 𝐇𝐀𝐈 ┼Ə𝐑𝐈 ┼❍ 𝐌𝐀𝐉Ə 𝐌𝐀𝐉Ə😂🩷😆 ★━━━━━━━━━━━━━★`,attachment: fs.createReadStream(__dirname + `/noprefix/jigri.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🫦", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
