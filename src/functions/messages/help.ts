import { Message, MessageEmbed } from "discord.js";
import { commands } from "../../data/json/commands.json";
import { main } from "../../data/json/config.json";

export const Help = (msg: Message) => {
  if (msg.content === main + "help") {
    const data = commands;
    const helpCommand = data;

    helpCommand.forEach(async (commands: any) => {
      await msg.channel.send(commands);
    });
  }
};
