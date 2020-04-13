import { Message } from "discord.js";
import { commands } from "../data/commands.json";

export const help = (msg: Message) => {
  if (msg.content === "!help") {
    const data = commands;
    const helpCommand = data[1].command!;

    msg.channel.send(helpCommand);
  }
};
