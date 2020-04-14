import { Message } from "discord.js";
import { link } from "../../data/config.json";

export const links = (msg: Message) => {
  if (msg.content === link + " pin") {
    msg.channel.send("https://pinterest.com/");
  }

  if (msg.content === link + " insta") {
    msg.channel.send("https://instagram.com/");
  }
};
