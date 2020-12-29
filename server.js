var dbd = require(`dbd.js`)
var fs = require('fs') 
var bot = new dbd.Bot({
  token:process.env.TOKEN,
  prefix: "tm!" 
})

bot.onMessage()
var reader = fs.readdirSync("./komutlar").filter(file => file.endsWith(".js"))
for(const file of reader) {
  const command = require(`./komutlar/${file}`)
  bot.command({
    name: command.name,
    code: command.code
  })
} 
