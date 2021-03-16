import { Message } from "discord.js";
import { prefix } from "../data/config.json";
import { withCommand } from "../utils/withCommand";

export const members = async (msg: Message) => {
  const command = withCommand(prefix, msg.content);

  if (command("kick") && msg.member?.hasPermission("ADMINISTRATOR")) {
    try {
      const member = msg.mentions.members?.first();
      if (member) {
        const kickMember = await member.kick();
        await msg.channel.send(`${kickMember.user.username} has been kicked`);
      }
    } catch (error) {
      msg.reply("You don't have permissions");
    }
  }

  if (command("ban") && msg.member?.hasPermission("ADMINISTRATOR")) {
    try {
      const member = msg.mentions.members?.first();
      if (member) {
        const banMember = await member.ban();
        await msg.channel.send(`${banMember} has been baned`);
      }
    } catch (error) {
      msg.reply("You don't have permissions");
    }
  }

  return msg;
};
