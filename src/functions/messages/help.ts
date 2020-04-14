import { Message, MessageEmbed } from "discord.js";
import { embedMsg } from "../libs/index";
import { commands } from "../../data/json/commands.json";
import { main } from "../../data/json/config.json";

export const Help = (msg: Message) => {
  if (msg.content === main + "help") {
    const data = commands;
    const helpCommand = data;

    helpCommand.forEach(async (commands: any) => {
      const embed = embedMsg({
        title: commands.command,
        description: commands.info,
        color: "#222",
      });

      await msg.channel.send(embed);
    });
  }
};
