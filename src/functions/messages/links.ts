import { Message } from "discord.js";
import { link } from "../../data/json/config.json";
import links from "../../data/json/links.json";

export const Links = (msg: Message) => {
  if (msg.content === link + " pin") {
    msg.channel.send(links[0]);
  }

  if (msg.content === link + " insta") {
    msg.channel.send(links[1]);
  }
};
