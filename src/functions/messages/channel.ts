import { Message } from "discord.js";
import { main } from "../../data/json/config.json";
import {
  ConnectVoiceChannel,
  // startMusic,
  DisconnectVoiceChannel,
} from "../actions/music";

export const Channel = async (msg: Message) => {
  if (msg.content === main + "clear" || msg.content === "cls") {
    try {
      await msg.channel.bulkDelete(100);
    } catch (error) {
      console.log(error);
    }
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
