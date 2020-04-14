import { Message } from "discord.js";
import { main } from "../../data/config.json";

export const members = async (msg: Message) => {
  if (msg.content === main + "kick") {
    if (msg.member?.hasPermission(["KICK_MEMBERS"])) {
      const member = msg.mentions.members?.first();
      if (member) {
        const kickMember = await member.kick();
        msg.channel.send(`${kickMember.user.username} hass been kicked`);
      }
    }
    return msg.reply("You don't have permissions");
  }
};
