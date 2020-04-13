"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Enviroment Variable
const dotenv_1 = require("dotenv");
dotenv_1.config();
const discord_js_1 = require("discord.js");
// Initialization
const bot = new discord_js_1.Client();
const index_1 = require("./functions/index");
// Initialitation
bot.once("ready", async () => {
    await console.log("Bot is ready!");
});
// Functionality
bot.on("message", index_1.messages);
// Login
bot.login(`${process.env.DISCORD_TOKEN}`);
