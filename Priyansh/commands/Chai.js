//@Prem-babu3608
////////////////////////////////////////////////////////
/////// WARNING => JO CREDIT NAME CHANGE KREGA USKA ID BAN KAR DIYA JAYEGA + THIS BOT IS MADE BT PREM BABU
const fs = require("fs");
module.exports.config = {
	name: "chai",
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
	if(react.includes("ttea") ||
     react.includes("chaai") || react.includes("tea") || react.includes("Teea") ||
react.includes("CHAI") ||
react.includes("chaii")) {
		var msg = {
				body: `🌹𝐋❍ 𝐌Ə𝐑𝐈 𝐉𝐀𝐀𝐍 𝐂𝐇𝐀𝐈 𝐏𝐈𝐋❍ 🌹🥰`,attachment: fs.createReadStream(__dirname + `/noprefix/Chai2.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💋", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
