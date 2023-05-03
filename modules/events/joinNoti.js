module.exports.config = {
	name: "joinNoti",
	eventType: ["log:subscribe"],
	version: "1.0.1",
	credits: "MrTomXxX",
	description: "Notify bot or group member with random gif/photo/video",
	dependencies: {
		"fs-extra": "",
		"path": ""
	}
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

	const path = join(__dirname, "cache", "joinGif");
	if (existsSync(path)) mkdirSync(path, { recursive: true });	

	const path2 = join(__dirname, "cache", "joinGif", "randomgif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}


module.exports.run = async function({ api, event, Users, Threads }) {
    const { join } = global.nodemodule["path"];
	const { threadID } = event;
	if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
		api.changeNickname(`» ${global.config.PREFIX} « → ${(!global.config.BOTNAME) ? "𝙈𝙧𝙏𝙤𝙢 𝙊𝙛𝙛𝙞𝙘𝙞𝙖𝙡 𝘽𝙤𝙩<3" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
		return api.sendMessage(`▂▃▅▆𝐋𝐨𝐚𝐝𝐢𝐧𝐠...𝟏𝟎𝟎%▆▅▃▂\n⫸ 𝘾𝙤𝙣𝙣𝙚𝙘𝙩𝙚𝙙 𝙎𝙪𝙘𝙘𝙚𝙨𝙁𝙪𝙡𝙡 ⫷\n●▬▬▬▬▬๑⇩⇩๑▬▬▬▬▬●\n[⚜️] 𝙈𝙖𝙡𝙞𝙝𝙖 𝘽𝙤𝙩 𝙊𝙬𝙣𝙚𝙧:- 𝙈𝙧𝙏𝙤𝙢𝙓𝙭𝙓 [⚜️]\n[⚜️] 1-𝘿𝙤𝙣'𝙩 𝙎𝙥𝙖𝙢 𝙏𝙝𝙚 𝘽𝙤𝙩\n[⚜️] 2-𝘿𝙤𝙣'𝙩 𝙆𝙞𝙘𝙠 𝘼𝙣𝙙 𝙍𝙚-𝘼𝙙𝙙 𝙏𝙝𝙚 𝘽𝙤𝙩\n[⚜️] 𝙏𝙤 𝙎𝙚𝙚 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨 𝘼𝙫𝙖𝙞𝙡𝙖𝙗𝙡𝙚 𝙏𝙮𝙥𝙚 [ .help ] 𝙊𝙧 [ .menu ] 𝙏𝙝𝙞𝙨 𝘽𝙤𝙩 𝙄𝙨 𝙀𝙙𝙞𝙩𝙞𝙣𝙜 𝘽𝙮 𝙈𝙧𝙏𝙤𝙢\n●▬▬▬▬▬๑⇧⇧๑▬▬▬▬▬●
\n❛━━･❪ 𝑷𝒓𝒆𝒇𝒊𝒙 [ . ]❫･━━❜\n[⚜️] 𝙄𝙛 𝙔𝙤𝙪 𝙃𝙖𝙫𝙚 𝘼𝙣𝙮 𝙌𝙪𝙚𝙨𝙩𝙞𝙤𝙣 𝙊𝙧 𝙉𝙚𝙚𝙙 𝙃𝙚𝙡𝙥 𝘾𝙤𝙣𝙩𝙖𝙘𝙩 𝘽𝙤𝙩 𝘼𝙙𝙢𝙞𝙣: https://www.facebook.com/MrTomXxX\n[⚜️] 𝗩𝗶𝗲𝘄 𝗕𝗼𝘁 𝗶𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻:: [ .𝙢𝙧𝙩𝙤𝙢 ]\n[⚜️] 𝗤𝗧𝗩 𝗰𝗮𝗻 𝘂𝘀𝗲 [ .𝗵𝗲𝗹𝗽 ] 𝗿𝘂𝗹𝗲 𝘁𝗼 𝘀𝗲𝗲 𝗽𝗲𝗼𝗽𝗹𝗲'𝘀 𝗱𝗶𝗿𝗲𝗰𝘁𝗶𝗼𝗻 𝗮𝗻𝗱 𝘀𝗲𝘁 𝗯𝗼𝘅 𝗿𝘂𝗹𝗲𝘀\n[⚜️] 𝗠𝗲𝗺𝗯𝗲𝗿𝘀 𝘂𝘀𝗲 [ .𝗿𝘂𝗹𝗲 ] 𝘁𝗼 𝘃𝗶𝗲𝘄 𝘁𝗵𝗲𝗶𝗿 𝗯𝗼𝘅 𝗿𝘂𝗹𝗲𝘀\n◆━━━━━━━━━━━━━◆\n[⚜️] 𝐓𝐡𝐢𝐬 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐛𝐲 𝙈𝙧𝙏𝙤𝙢𝙓𝙭𝙓. 𝐓𝐡𝐚𝐧𝐤 𝐲𝐨𝐮 𝐟𝐨𝐫 𝐮𝐬𝐢𝐧𝐠\n[⚜️] 𝙰𝚍𝚖𝚒𝚗: 𝙍𝙖𝙩𝙪𝙡 𝙃𝙖𝙨𝙨𝙖𝙣`, threadID);
	}
  else {
		try {
			const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
        const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("DD/MM/YYYY || HH:mm:s");
  const hours = moment.tz("Asia/Kolkata").format("HH");
			let { threadName, participantIDs } = await api.getThreadInfo(threadID);
			const threadData = global.data.threadData.get(parseInt(threadID)) || {};
			const path = join(__dirname, "cache", "joinGif");
			const pathGif = join(path, `${threadID}.mp4`);

			var mentions = [], nameArray = [], memLength = [], i = 0;
			
			for (id in event.logMessageData.addedParticipants) {
				const userName = event.logMessageData.addedParticipants[id].fullName;
				nameArray.push(userName);
				mentions.push({ tag: userName, id });
				memLength.push(participantIDs.length - i++);
			}
			memLength.sort((a, b) => a - b);
			
			(typeof threadData.customJoin == "undefined") ? msg = "[⚜️] 𝙃𝙞 {type} {name}.\n𝙒𝙚𝙡𝙘𝙤𝙢𝙚 𝙩𝙤 {threadName}.\n[❗] 𝙁𝙧𝙤𝙢 𝙉𝙤𝙬 {name} 𝙋𝙖𝙧𝙩 𝙊𝙛 𝙏𝙝𝙞𝙨 𝙁𝙖𝙢𝙞𝙡𝙮. 𝘿𝙤𝙣'𝙩 𝙒𝙤𝙧𝙧𝙮 𝙔𝙤𝙪'𝙧𝙚 𝙉𝙤𝙩 𝘼𝙡𝙤𝙣𝙚 𝙃𝙚𝙧𝙚. 𝙔𝙤𝙪'𝙧𝙚 𝙏𝙝𝙚 {soThanhVien} 𝙉𝙪𝙢𝙗𝙚𝙧 𝙊𝙛 𝙏𝙝𝙞𝙨 {threadName} 𝙈𝙚𝙢𝙗𝙚𝙧.\n[🌐] 𝙒𝙝𝙮 𝘿𝙤𝙣𝙩 {type} 𝙅𝙪𝙨𝙩 𝙎𝙚𝙚 𝙏𝙝𝙚 𝙍𝙪𝙡𝙚𝙨 𝙊𝙛 𝙏𝙝𝙞𝙨 𝙂𝙧𝙤𝙪𝙥 𝙐𝙨𝙚\n◆━━━━━━━━━━━━━◆\n[📝] [ .rule ](𝙐𝙣𝙡𝙚𝙨𝙨 𝘼𝙙𝙢𝙞𝙣/𝙌𝙩𝙫 𝘿𝙤𝙣𝙩 𝘼𝙙𝙙 𝘼𝙣𝙮 𝙊𝙩𝙝𝙚𝙧 𝙍𝙪𝙡𝙚𝙨)\n[💥] 𝗜𝗳 𝘆𝗼𝘂 𝘀𝗽𝗮𝗺 𝗯𝗼𝘁𝘀 𝗼𝗿 𝗯𝗼𝘁 𝗼𝘄𝗻𝗲𝗿𝘀, 𝘆𝗼𝘂 𝘄𝗶𝗹𝗹 𝗴𝗲𝘁 𝗯𝗮𝗻𝗻𝗲𝗱 𝗼𝗿 𝗾𝘁𝘃 𝗯𝗼𝘀𝘀 𝘄𝗶𝗹𝗹 𝗸𝗶𝗰𝗸 𝘆𝗼𝘂 𝗼𝘂𝘁 𝗼𝗳 𝘁𝗵𝗲 𝗯𝗼𝘅\n[❤️] 𝙒𝙞𝙨𝙝 𝙔𝙤𝙪 𝙃𝙖𝙫𝙚 𝙖 𝙂𝙤𝙤𝙙 {session} || {time} 𝙃𝙖𝙫𝙚 𝙁𝙪𝙣": msg = threadData.customJoin;
			msg = msg
                .replace(/\{name}/g, nameArray.join(', '))
                .replace(/\{type}/g, (memLength.length > 1) ? '𝙏𝙝𝙚𝙧𝙚' : '𝙔𝙤𝙪')
                .replace(/\{soThanhVien}/g, memLength.join(', '))
                .replace(/\{threadName}/g, threadName)
                .replace(/\{session}/g, hours <= 10 ? "𝙈𝙤𝙧𝙣𝙞𝙣𝙜" : 
    hours > 10 && hours <= 12 ? "𝘼𝙛𝙩𝙚𝙧𝙉𝙤𝙤𝙣" :
    hours > 12 && hours <= 18 ? "𝙀𝙫𝙚𝙣𝙞𝙣𝙜" : "𝙉𝙞𝙜𝙝𝙩")
                .replace(/\{time}/g, time);  



			if (existsSync(path)) mkdirSync(path, { recursive: true });

			const randomPath = readdirSync(join(__dirname, "cache", "joinGif", "randomgif"));

			if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
			else if (randomPath.length != 0) {
				const pathRandom = join(__dirname, "cache", "joinGif", "randomgif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
				formPush = { body: msg, attachment: createReadStream(pathRandom), mentions }
			}
			else formPush = { body: msg, mentions }

			return api.sendMessage(formPush, threadID);
      
		} catch (e) { return console.log(e) };
	}
                       }