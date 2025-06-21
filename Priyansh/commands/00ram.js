const fs = require("fs");
module.exports.config = {
  name: "ram",
    version: "2.1.1",
  hasPermssion: 0,
  credits: "PRINCE RAJPUT", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async ({ api, event, Users, Currencies, args, utils, client, global }) => {
  var name = await Users.getNameUser(event.senderID);
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("ram") ||
     react.includes("RAM") ||
     react.includes("rAm") ||
react.includes("Ram")) {
    var msg = {
        body: `!!…जय..श्री..राम..!! ❤️❥❥═══༄ᶦᶰᵈ᭄🙏 
        
        ज़िन्दगी का क्या हैं, हर पल सताएगी,
        ________________________
        राम भक्तों का चुनौतियां कुछ ना कर पाएंगी  __________________________
        
       !!…जय..श्री..राम..!! ❤️❥❥═ᵈ᭄🙏👈`,attachment: fs.createReadStream(__dirname + `/noprefix/ram.mp4`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😍", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }
