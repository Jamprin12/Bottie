"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Enviroment Variable
const dotenv_1 = require("dotenv");
dotenv_1.config();
const discord_js_1 = require("discord.js");
// Initialization
const bot = new discord_js_1.Client();
const index_1 = require("./functions/messages/index");
// Initialitation
bot.once("ready", async () => {
    var _a;
    await console.log("Bot is ready as", (_a = bot.user) === null || _a === void 0 ? void 0 : _a.username);
});
// Functionality
bot.on("message", (msg) => {
    index_1.messages(msg);
});
// Depurations
bot.on("error", (e) => console.error(e));
bot.on("warn", (e) => console.warn(e));
bot.on("debug", (e) => console.info(e));
// Login
bot.login(`${process.env.DISCORD_TOKEN}`);
