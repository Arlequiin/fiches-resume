// NOTE: DON'T USE THIS FOR ACTUAL SERVERS WITH BACKEND!
// HAVE ACTUAL PATHS!
const express = require("express");
const app = express();


app.use(express.static(__dirname + "/public"), (_, res, next) => {
  res.status(404)
  res.sendFile(__dirname + "/404.html")
});

app.listen(8080);
console.log("website is running")
console.log("≠ ƒ 𝑥² ₁ ₂ ℝ « » :")
/*
const { Client, GatewayIntentBits, Partials } = require("discord.js");

const bot = new Client({
  'intents': [
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildBans,
    GatewayIntentBits.GuildMessages
  ],
  'partials': [Partials.Channel]
});

bot.on('messageCreate', async (message) => {
  console.log(message);
});

bot.on("message", msg => {
  if (msg.content === "ping") {
    msg.reply("pong");
    message.channel.send("My Message");
  }
})

bot.login(process.env.TOKEN)

console.log("bot is running")
*/