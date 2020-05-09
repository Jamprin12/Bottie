import { Message } from "discord.js";
import { main } from "../../data/json/config.json";

export const Debate = (msg: Message) => {
  if (
    msg.content.startsWith(main + "debate subject") &&
    msg.channel.id === "703887804064858143"
  ) {
    const split = msg.content.split(" ");
    const subject = split[2];
    console.log(subject);
  }

  if (
    msg.content === "debate team1" &&
    msg.channel.id === "703887804064858143"
  ) {
  }

  if (
    msg.content === "debate team2" &&
    msg.channel.id === "703887804064858143"
  ) {
  }
};
