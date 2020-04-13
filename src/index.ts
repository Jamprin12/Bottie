// Enviroment Variable
import { config } from "dotenv";
config();

import { Client, Message } from "discord.js";

// Initialization
const bot: Client = new Client();

import { messages } from "./functions/index";

// Initialitation
bot.once("ready", async () => {
  await console.log("Bot is ready as", bot.user?.username);
});

// Functionality
bot.on("message", (msg: Message) => {
  messages(msg);
});

// Login
bot.login(`${process.env.DISCORD_TOKEN}`);
