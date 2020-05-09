import { Message } from "discord.js";
import { main } from "../../data/json/config.json";
import {
  ConnectVoiceChannel,
  // startMusic,
  DisconnectVoiceChannel,
} from "../actions/music";
import { embedMsg } from "../utils";
import fs from "fs";
import path from "path";

export const Channel = async (msg: Message) => {
  if (msg.content === main + "clear" || msg.content === "cls") {
    try {
      await msg.channel.bulkDelete(100);
    } catch (error) {
      console.log(error);
    }
  }

  // beta
  if (msg.content === main + "prefix") {
    let embed = embedMsg({
      title: main,
      color: "#3000",
    });
    msg.channel.send(embed);
  }

  if (msg.content.startsWith(main + "setprefix")) {
    const split = msg.content.split(" ");
    const newPrefix = split[1];

    let pathFile = path.join(__dirname, "../../data/json/config.json");

    await fs.writeFileSync(pathFile, { main: newPrefix });
    console.log("Works");
  }

  if (msg.content === main + "music join") {
    ConnectVoiceChannel(msg);
  }

  if (msg.content === main + "music play") {
    // startMusic(msg)
  }

  if (msg.content === main + "music leave") {
    DisconnectVoiceChannel(msg);
  }
};
