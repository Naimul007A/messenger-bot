module.exports.config = {
    name:"teach",
    version: "1.0.2",
    hasPermssion: 0,
    credits: "𝙈𝙧𝙏𝙤𝙢𝙓𝙭𝙓",
    description: "Teach cute nino :3",
    commandCategory: "General",
    usages: "/kaiteach your ask => my answer",
    cooldowns: 0
};

const axios = require('axios');

module.exports.run = async ({ api, event, args }) => {
    let { messageID, threadID } = event;
    let work = args.join(" ");
    let fw = work.indexOf(" => ");
    if (fw == -1) {
        api.sendMessage("wrong format /kaiteach 𝙈𝙧𝙏𝙤𝙢𝙓𝙭𝙓 => MY Boss",threadID,messageID);
    } else {
        let ask = work.slice(0, fw);
        let answer = work.slice(fw + 4, work.length);
        if (ask=="") {api.sendMessage("wrong format /kaiteach 𝙈𝙧𝙏𝙤𝙢𝙓𝙭𝙓 => MY Boss",threadID,messageID)} else {
            if (!answer) {api.sendMessage("wrong format /kaiteach 𝙈𝙧𝙏𝙤𝙢𝙓𝙭𝙓 => My Boss",threadID,messageID)} else {
                    axios.get(encodeURI(`https://Adreno-API-1.jolandmanzano.repl.co/nino/add/${ask}&&${answer}`)).then(res => {
                        if (res.data.reply == "Key and value have all cmnr, add the cc"){
                            api.sendMessage("question, answer already exists ;-;",threadID,messageID)} else {
                                if (res.data.reply == "There's something wrong with cc, I don't know") {api.sendMessage('Unknown error ;-;',threadID,messageID)} else {
                                    api.sendMessage("teach success!!",threadID,messageID);
                                }
                            }
                    })
            }
        }
    }
                        }