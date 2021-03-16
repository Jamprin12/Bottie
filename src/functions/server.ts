import { Message } from "discord.js";
import fs from "fs";
import path from "path";
import { prefix } from "../data/config.json";
import { getServerPrefix } from "../services/server";
import { embedMsg } from "../utils/embedMessage";
import { withCommand } from "../utils/withCommand";

export const server = async (msg: Message) => {
  const command = withCommand(prefix, msg.content);

  if (command("setPrefix")) {
    const [, splittedMsg] = msg.content.split(" ");
    const newPrefix = splittedMsg ? splittedMsg : "!";
    const pathFile = path.join(__dirname, "../../data/json/config.json");

    fs.writeFile(pathFile, JSON.stringify({ prefix: newPrefix }), async () => {
      await msg.channel.send(`Now the prefix is ${newPrefix}`);
    });
  }

  if (command("prefix")) {
    getServerPrefix();
    const embed = embedMsg({
      title: prefix,
      color: "#fafafa",
    });
    await msg.channel.send(embed);
  }

  return msg;
};
