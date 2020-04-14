import { Message } from "discord.js";
import { main } from "../../data/config.json";

export const channel = async (msg: Message) => {
  if (msg.content === main + "clear") {
    try {
      await msg.channel.bulkDelete(100);
    } catch (error) {
      console.log(error);
    }
  }
};
