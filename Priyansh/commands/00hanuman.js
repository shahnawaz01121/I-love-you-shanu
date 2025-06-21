const fs = require("fs");
module.exports.config = {
  name: "hanuman",
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
  if(react.includes("hanuman") ||
     react.includes("bajrangbali") ||
     react.includes("HANUMAN") ||
react.includes("Hanuman")) {
    var msg = {
        body: `💝༄ᶦᶰᵈ᭄🔥⃝Jai hanuman ji❤️❥❥═══༄ᶦᶰᵈ᭄🙏 
        
        बस नाम लेते रहो श्री राम का
        ________________________
        साथ मिलता रहेगा हनुमान का। __________________________
        
        🔥⃝Jai hanuman ji❤️❥❥═══༄ᶦᶰᵈ᭄🙏👈`,attachment: fs.createReadStream(__dirname + `/noprefix/hanuman.mp4`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😍", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }
