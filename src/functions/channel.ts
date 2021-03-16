import { Message, TextChannel } from "discord.js";
import { prefix } from "../data/config.json";
import { Box } from "../utils/Box";
import { withCommand } from "../utils/withCommand";

export const channel = async (msg: Message) => {
  const command = withCommand(prefix, msg.content);

  if (command("clear")) {
    try {
      const messages = await Box(msg.content)
        .map((content) => content.split(/ /)[1])
        .map((amount) => (amount ? amount : 5))
        .chain((amount) =>
          Box(msg.channel)
            .map((channel) => channel.messages.fetch({ limit: amount }))
            .fold((x) => x)
        )
        .fold((x) => x);
      const channel = msg.channel as TextChannel;

      channel.bulkDelete(messages);
    } catch (error) {
      msg.channel.send(error);
    }
  }

  return msg;
};
