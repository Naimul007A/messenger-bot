module.exports.config = {
    name: "allpic",
    version: "0.0.1",
    hasPermssion: 0,
    credits: "MrTomXxX",
    description: "See all photos on bot",
    commandCategory: "random-img",
    usages: "image",
    cooldowns: 0,
    envConfig: {
      cooldownTime: 1200000
    }
  };
  module.exports.onLoad = async function () {
        console.log("===========» API MrTomXxX «===========");
  }
  module.exports.run = async function ({ event, api , args, Users}){
    const fs = require("fs");
    let name1 = await Users.getNameUser(event.senderID)
    var name = ["Sexy", "Russian girls", "Hiring", "Twitter", "LGBT", "Loli", "Blackpink", "Slap", "Wallpaper", "Trai", "Jack", "Nude", "Instagram", "Kiss", "Chest", "Meme", "Hentai", "Girl", "Butt", "Cosplay", "Kurumi", "Arena of valor", "Lucy", "Sagiri", "Chitanda", "Rem", "Anime", "Naughty", "Wibu", "Beo", "Ausand", "Shiba", "Khanh Huyen", "Ngoc Trinh", "Linh Ngoc Dam", "Jimmy", "Le Bong", "Sex", "Do Mixi", "Couple", "Streamer Hanna" , "Nobra", "Sexy Girl", "Pretty Girl", "Pretty Boy", "Background 4K", "Anime", "Japanese Girl", "Chinese Girl", "Hololive", "Hot Twitter", "Hot Instagram", "VSBG Girl", "Phan Tran Anh Tam Photo", "Sex 18+ Photo", "Japan", "VSBG Hot ", "Vietnamese Pretty Girl"]
    var b = name.length;
    var page = 1;
    page = parseInt(args[0]) || 1;
    page < -1 ? page = 1 : "";
    var limit = 10;
    var numPage = Math.ceil(b / limit);
    var msg = `[⚜️] RANDOM IMAGE [⚜️]\n\n`;
    var x = 1;
    for (var i = limit * (page - 1); i < limit * (page - 1) + limit; i++) {
        if (i >= b) break;
        msg += `[⚜️] ${i+1} [⚜️] → ${name[i]}\n\n`;
    }
    msg += `[⚜️]→ Page (${page}/${numPage})\n[⚜️]→ Use ${global.config.PREFIX}${this.config.name} <number of pages>\n\n[⚜️]→ Please ${name1} reply to messages in order to choose photos!!!`;
    return api.sendMessage(msg, event.threadID, (error, info) =>
    {
      global.client.handleReply.push(
      {
        name: this.config.name,
        messageID: info.messageID,
        author: event.senderID,
        type: "choose"
      });
    }, event.messageID);
  }
  module.exports.handleReply = async function ({ event, api , args, handleReply, Users}){
    const axios = require("axios");
    
             if(event.body == "1"){
         var url = "https://jrt-api.nguyenhaidang.ml/gaisexy"
}
         else if(event.body == "2"){
         var url = "https://jrt-api.nguyenhaidang.ml/gainga"
}
         else if(event.body == "3"){
         var url = "https://jrt-api.nguyenhaidang.ml/ganyu"
}
          else if(event.body == "4"){
          var url = "https://jrt-api.nguyenhaidang.ml/twitter"
}
          else if(event.body == "5"){
          var url = "https://jrt-api.nguyenhaidang.ml/lgbt"
}
         else if(event.body == "6"){
          var url = "https://jrt-api.nguyenhaidang.ml/loli"
}
         else if(event.body == "7"){
          var url = "https://jrt-api.nguyenhaidang.ml/blackpink"
}
         else if(event.body == "8"){
          var url = "https://jrt-api.nguyenhaidang.ml/slap"
}
         else if(event.body == "9"){
         var url = "https://jrt-api.nguyenhaidang.ml/wallpaper"
}
         else if(event.body == "10"){
         var url = "https://jrt-api.nguyenhaidang.ml/trai"
}
         else if(event.body == "11"){
         var url = "https://jrt-api.nguyenhaidang.ml/jack"
}
        else if(event.body == "12"){
          var  url = "https://jrt-api.nguyenhaidang.ml/nude"
}
         else if(event.body == "13"){
          var  url = "https://jrt-api.nguyenhaidang.ml/instagram"
}
         else if(event.body == "14"){
         var url = "https://jrt-api.nguyenhaidang.ml/kiss"
}
         else if(event.body == "15"){
         var url = "https://jrt-api.nguyenhaidang.ml/gaivuto"
}
         else if(event.body == "16"){
          var url = "https://jrt-api.nguyenhaidang.ml/meme"
}
         else if(event.body == "17"){
           var url = "https://jrt-api.nguyenhaidang.ml/hentai"
}
         else if(event.body == "18"){
          var url = "https://jrt-api.nguyenhaidang.ml/gai"
}
         else if(event.body == "19"){
           var url = "https://jrt-api.nguyenhaidang.ml/gaiditbu"
}
         else if(event.body == "20"){
          var url = "https://jrt-api.nguyenhaidang.ml/cosplay"
}
        else if(event.body == "21"){
          var url = "https://apimyjrt.nguyenhaidang.ml/kurumi.php"
}
       else if(event.body == "22"){
          var url = "https://apimyjrt.nguyenhaidang.ml/lienquan.php"
}
       else if(event.body == "23"){
          var url = "https://apimyjrt.nguyenhaidang.ml/lucy.php"
}
       else if(event.body == "24"){
          var url = "https://apimyjrt.nguyenhaidang.ml/sagiri.php"
}
       else if(event.body == "25"){
          var url = "https://apimyjrt.nguyenhaidang.ml/chitanda.php"
}
       else if(event.body == "26"){
           var url = "https://apimyjrt.nguyenhaidang.ml/rem.php"
}
       else if(event.body == "27"){
         var  url = "https://apimyjrt.nguyenhaidang.ml/loli.php"
}
       else if(event.body == "28"){
           var url = "https://apimyjrt.nguyenhaidang.ml/naughty.php "
}
       else if(event.body == "29"){
           var url = "https://wibu.demngayyeu.repl.co/"
}
       else if(event.body == "30"){
         var url = "https://beo.demngayyeu.repl.co/"
}
       else if(event.body == "31"){
         var url = "https://ausand.demngayyeu.repl.co/"
}
       else if(event.body == "32"){
          var url = "https://shiba.demngayyeu.repl.co/"
}
       else if(event.body == "33"){
        var url = "https://khanhhuyen.demngayyeu.repl.co/"
}
       else if(event.body == "34"){
         var url = "https://ngoctrinh.demngayyeu.repl.co/"
}
       else if(event.body == "35"){
         var url = "https://linhngocdam.demngayyeu.repl.co/"
}
       else if(event.body == "36"){
         var url = "https://jimmy.demngayyeu.repl.co/"
}
       else if(event.body == "37"){
        var url = "https://lebong.demngayyeu.repl.co/"
}
       else if(event.body == "38"){
        var url = "https://apimyjrt.nguyenhaidang.ml/nude.php"
}
        else if(event.body == "39"){
        var url = "https://jrt-api.nguyenhaidang.ml/domixi"
}
        else if(event.body == "40"){
        var url = "https://jrt-api.nguyenhaidang.ml/capdoi"
}
        else if(event.body == "41"){
        var url = "https://jrt-api.nguyenhaidang.ml/hanna"
}
        else if(event.body == "42"){
        var url = "https://apimyjrt.nguyenhaidang.ml/nobra.php"
}
        else if(event.body == "43"){
        var url = "https://apimyjrt.nguyenhaidang.ml/sexy.php"
}
        else if(event.body == "44"){
        var url = "https://apimyjrt.nguyenhaidang.ml/gái.php"
}
        else if(event.body == "45"){
        var url = "https://apimyjrt.nguyenhaidang.ml/trai.php"
}
        else if(event.body == "46"){
        var url = "https://apimyjrt.nguyenhaidang.ml/background.php"
}
        else if(event.body == "47"){
        var url = "https://jrt-api.nguyenhaidang.ml/anime"
}
        else if(event.body == "48"){
        var url = "https://apimyjrt.nguyenhaidang.ml/japan.php"
}
        else if(event.body == "49"){
        var url = "https://apimyjrt.nguyenhaidang.ml/china.php"
}
    else if(event.body == "50"){
        var url = "https://apimyjrt.nguyenhaidang.ml/hololive.php"
}
    else if(event.body == "51"){
        var url = "https://apimyjrt.nguyenhaidang.ml/twitter.php"
}
    else if(event.body == "52"){
        var url = "https://apimyjrt.nguyenhaidang.ml/instagram.php"
}
    else if(event.body == "53"){
        var url = "https://apimyjrt.nguyenhaidang.ml/vsbg.php"
}
    else if(event.body == "54"){
        var url = "https://jrt-api.nguyenhaidang.ml/ptat"
}
    else if(event.body == "55"){
        var url = "https://jrt-api.nguyenhaidang.ml/sex"
}
    else if(event.body == "56"){
        var url = "https://jrt-api.nguyenhaidang.ml/japan"
}
    else if(event.body == "57"){
        var url = "https://jrt-api.nguyenhaidang.ml/vsbg"
}
    else if(event.body == "58"){
        var url = "https://jrt-api.nguyenhaidang.ml/gaixinhvn"
}
    switch(handleReply.type){
    case "choose":{
    api.unsendMessage(handleReply.messageID);
    const res = await axios.get(url);
    const fs = require ("fs");
    let name = await Users.getNameUser(event.senderID)
    const data = res.data.data;
    const download = (await axios.get(data, {
        responseType: "stream"
    })).data;
    return api.sendMessage({body: `[⚜️] Success [⚜️]\n[❤️] Here's Your photo ${name} This!!!`, attachment : download}, event.threadID)
}
    }
}