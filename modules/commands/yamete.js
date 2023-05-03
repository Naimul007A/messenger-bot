const fs = require("fs");
module.exports.config = {
	name: "yamete",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "𝙈𝙧𝙏𝙤𝙢𝙓𝙭𝙓", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "yamete",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("yamete")==0 || (event.body.indexOf("Yamete")==0)) {
		var msg = {
				body: ">_<",
				attachment: fs.createReadStream(__dirname + `/noprefix/yamate.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😣", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }