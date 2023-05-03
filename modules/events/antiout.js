module.exports.config = {
    name: "antiout",
    eventType: ["log:unsubscribe"],
    version: "0.0.1",
    credits: "MrTomXxX",
    description: "Listen events"
};

module.exports.run = async({ event, api, Threads, Users }) => {
    let data = (await Threads.getData(event.threadID)).data || {};
    if (!data.antiout) return;
    if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
    const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
    const type = (event.author == event.logMessageData.leftParticipantFbId) ? "self-separation" : "got kicked out by the admin";
    if (type == "self-separation") {
        api.addUserToGroup(event.logMessageData.leftParticipantFbId, event.threadID, (error, info) => {
            if (error) {
                api.sendMessage(`[🔱] ANTIOUT [🔱] Can't re-invite the person who likes to go out ${name} to the group :( `, event.threadID)
            } else api.sendMessage(`[🔱] ANTIOUT [🔱] Invited back ${name} who likes to go out. Mentally prepare 🥲`, event.threadID);
        })
    }
}