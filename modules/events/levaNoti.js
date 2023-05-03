module.exports.config = {
	name: "leave",
	eventType: ["log:unsubscribe"],
	version: "1.0.0",
	credits: "MrTomXxX",//Mod by H.Thanh
	description: "Notify the Bot or the person leaving the group with a random gif/photo/video",
	dependencies: {
		"fs-extra": "",
		"path": ""
	}
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

	const path = join(__dirname, "cache", "leaveGif");
	if (existsSync(path)) mkdirSync(path, { recursive: true });	

	const path2 = join(__dirname, "cache", "leaveGif", "randomgif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}

module.exports.run = async function({ api, event, Users, Threads }) {
	if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
	const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
	const { join } =  global.nodemodule["path"];
	const { threadID } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("DD/MM/YYYY || HH:mm:s");
  const hours = moment.tz("Asia/Kolkata").format("HH");
	const data = global.data.threadData.get(parseInt(threadID)) || (await Threads.getData(threadID)).data;
	const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
	const type = (event.author == event.logMessageData.leftParticipantFbId) ? "leave" : "managed";
	const path = join(__dirname, "cache", "leaveGif");
	const pathGif = join(path, `${threadID}.mp4`);
	var msg, formPush

	if (existsSync(path)) mkdirSync(path, { recursive: true });

(typeof data.customLeave == "undefined") ? msg = "[⚜️] 𝙏𝙝𝙞𝙨 {name} 𝘿𝙚𝙥𝙖𝙧𝙩𝙚𝙙 𝙁𝙧𝙤𝙢 𝙐𝙨. {type}  [⚜️]\n●▬▬▬▬๑۩۩๑▬▬▬▬●\n🌺🌸🌺 𝗧𝗵𝗮𝗻𝗸𝘀 𝘁𝗼 𝙢𝙮 𝘽𝙗𝙮 {name} 𝙔𝙤𝙪 𝙅𝙪𝙨𝙩 𝙏𝙖𝙠𝙚 𝗪𝗶𝗹𝗱𝗲𝗿𝗻𝗲𝘀𝘀 𝗕𝗼𝘁 𝗔𝗻𝗱 𝗕𝗼𝘅𝘅 𝗜𝗻 𝗧𝗵𝗲 𝗣𝗮𝘀𝘁 𝗪𝗶𝘁𝗵 𝗥𝗲𝗴𝗿𝗲𝘁𝘀 𝗕𝘂𝘁 𝗚𝗼𝗼𝗱𝗯𝘆𝗲 𝗧𝗵𝗲 𝘽𝙗𝙮 𝗔𝗻𝗱 𝗦𝗲𝗲 𝗬𝗼𝘂 𝗜𝗻 𝗧𝗵𝗲 𝗙𝘂𝘁𝘂𝗿𝗲 <3😊💔\n\n[❤️‍🔥] 𝘽𝙮𝙚 𝘽𝙮𝙚 𝘽𝙗𝙮. 𝘽𝙚 𝙃𝙖𝙥𝙥𝙮. {session} || {time}" : msg = data.customLeave;
	msg = msg.replace(/\{name}/g, name).replace(/\{type}/g, type).replace(/\{session}/g, hours <= 10 ? "𝙈𝙤𝙧𝙣𝙞𝙣𝙜" : 
    hours > 10 && hours <= 12 ? "𝘼𝙛𝙩𝙚𝙧𝙉𝙤𝙤𝙣" :
    hours > 12 && hours <= 18 ? "𝙀𝙫𝙚𝙣𝙞𝙣𝙜" : "𝙉𝙞𝙜𝙝𝙩").replace(/\{time}/g, time);  

	const randomPath = readdirSync(join(__dirname, "cache", "leaveGif", "randomgif"));

	if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif) }
	else if (randomPath.length != 0) {
		const pathRandom = join(__dirname, "cache", "leaveGif", "randomgif",`${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
		formPush = { body: msg, attachment: createReadStream(pathRandom) }
	}
	else formPush = { body: msg }
	
	return api.sendMessage(formPush, threadID);
}