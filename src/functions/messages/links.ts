import { Message } from "discord.js";
import { main } from "../../data/json/config.json";
import { links } from "../../data/json/links.json";
import path from "path";
import fs from "fs";

const pathServer = path.join(__dirname, "../../data/json/links.json");

export const Links = async (msg: Message) => {
  if (msg.content == main + "link pin") {
    msg.channel.send(links[0]);
  }
  if (msg.content == main + "link insta") {
    msg.channel.send(links[1]);
  }
  if (msg.content == main + "links add") {
    const split = msg.content.split(" ");
    const linkName = split[2];

    links.push(linkName);

    const linksJSON = {
      links,
    };

    fs.writeFile(pathServer, JSON.stringify(linksJSON), finish);

    async function finish() {
      await msg.channel.send(`Already has been added ${linkName}`);
    }
  }
};
