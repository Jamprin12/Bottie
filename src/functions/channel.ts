import { Message, TextChannel } from "discord.js";
import { commands } from "../data/commands.json";

export const channel = async (msg: Message) => {
  if (msg.content === "!clear") {
    try {
      const messages = msg.channel.messages;
      console.log(messages);
    } catch (err) {
      console.log(err);
    }
  }
};
