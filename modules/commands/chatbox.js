module.exports.config = {
	name: "chatbox",	version: "1.0.0", 
	hasPermssion: 2,
	credits: "𝙈𝙧𝙏𝙤𝙢𝙓𝙭𝙓",
	description: "Send message to box or user ", 
	commandCategory: "Admin",
	usages: "chatbox",
	cooldowns: 5, 
	dependencies: "",

};

module.exports.run = async function({ api, Users, Threads, event, args }) {
  let {body} = event
  var content = `${body}`;
  var id = args[0];
 var text = content.slice(id);
  api.sendMessage(text, id); 
}
