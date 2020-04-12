// Enviroment Variable
import { config } from "dotenv";
config();

// Initialization

import Discord, { Client } from "discord.js";

const bot: Client = new Discord.Client();

import { messages } from "./functions/index";

// Initialitation
bot.on("ready", async () => {
  await console.log("Bot is ready as", bot.user.username);
});

bot.on("message", messages);

bot.on("guildMemberAdd", async (member) => {
  // Send the message to a designated channel on a server:
  const channel = await member.guild.channels.cache.find(
    (ch) => ch.name === "member-log"
  );
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member}`);
});

bot.login(`${process.env.DISCORD_TOKEN}`);
