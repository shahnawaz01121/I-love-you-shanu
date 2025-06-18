//@Prem-babu3608
////////////////////////////////////////////////////////
/////// WARNING => JO CREDIT NAME CHANGE KREGA USKA ID BAN KAR DIYA JAYEGA + THIS BOT IS MADE BT PREM BABU
const fs = require("fs");
module.exports.config = {
	name: "samosa",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "PREM BABU", //////@prem-babu3608
	description: "THIS BOT IS MR PREM SHARMA",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("samosa") ||
     react.includes("Samosa") || react.includes("sAmosA") || react.includes("sAmOsA") ||
react.includes("SamoSha") ||
react.includes("SamoSa")) {
		var msg = {
				body: `★━━━━━━━━━━━━━★🌶️𝐊𝐡𝐚 𝐋𝐨 𝐌𝐞𝐫𝐢 𝐉𝐚𝐚𝐧🌶️ ★━━━━━━━━━━━━━★`,attachment: fs.createReadStream(__dirname + `/noprefix/samosa.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🍲", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

	}
