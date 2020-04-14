import { Message } from "discord.js";
import { commands } from "../../data/commands.json";
import { main } from "../../data/config.json";

export const help = (msg: Message) => {
  if (msg.content === main + "help") {
    const data = commands;
    const helpCommand = data;

    helpCommand.forEach(async (commands: any) => {
      await msg.channel.send(`${commands.command}  :  ${commands.info}`);
    });
  }
};
