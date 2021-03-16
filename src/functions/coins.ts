import { Message } from "discord.js";
import { prefix } from "../data/config.json";
import { withCommand } from "../utils/withCommand";

export const coins = (msg: Message) => {
  const command = withCommand(prefix, msg.content);
  if (command("coins"))
    try {
      const user = msg.author.username;
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  return msg;
};
