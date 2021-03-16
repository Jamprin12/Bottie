import { Client } from "discord.js";
import { config } from "dotenv";
import { commmandMessages } from "./functions/index";
config();

const bot: Client = new Client();

bot.once("ready", () => {
  console.log("Bot is ready as", bot.user?.username);
});

bot.on("message", commmandMessages);

bot.on("error", console.error);
bot.on("warn", console.warn);
bot.on("debug", console.info);

bot.login(`${process.env.DISCORD_TOKEN}`);
