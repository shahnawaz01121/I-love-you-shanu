//@Prem-babu3608
////////////////////////////////////////////////////////
/////// WARNING => JO CREDIT NAME CHANGE KREGA USKA ID BAN KAR DIYA JAYEGA + THIS BOT IS MADE BT PREM BABU
const fs = require("fs");
module.exports.config = {
	name: "coldrink",
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
	if(react.includes("coldrink") ||
     react.includes("Coldrink") || react.includes("COLdrink") || react.includes("ColdRINk") ||
react.includes("cholddrinK") ||
react.includes("ColDrink")) {
		var msg = {
				body: `💜|| 𝐓𝐮𝐦 𝐈𝐬𝐡𝐢 𝐋𝐚𝐲𝐚𝐤 𝐇𝐨 ||💜`,attachment: fs.createReadStream(__dirname + `/noprefix/coldrink.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💋", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
