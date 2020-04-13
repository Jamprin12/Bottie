import { Message } from "discord.js";

export const links = (msg: Message) => {
  if (msg.content === "!pin") {
    msg.channel.send("https://pinterest.com/");
  }

  if (msg.content === "!insta") {
    msg.channel.send("https://instagram.com/");
  }
};
