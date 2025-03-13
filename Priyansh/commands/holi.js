//@Prem-babu3608
////////////////////////////////////////////////////////
/////// WARNING => JO CREDIT NAME CHANGE KREGA USKA ID BAN KAR DIYA JAYEGA + THIS BOT IS MADE BT PREM BABU
const fs = require("fs");
module.exports.config = {
	name: "Holi",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "PREM BABU", ////////////@prem-babu3608
	description: "THIS BOT IS MR PREM SHARMA",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("happy") ||
     react.includes("Holi") || react.includes("rang") || react.includes("Hooli") ||
react.includes("HAPPY") ||
react.includes("holi")) {
		var msg = {
				body: `💋HAPPY HOLI MERI JAAN😘💋💋`,attachment: fs.createReadStream(__dirname + `/noprefix/happy.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🙈", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
