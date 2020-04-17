import { Message } from "discord.js";
import { main } from "../../data/json/config.json";
import { rulesGames, rulesServer } from "../../data/json/rules.json";
import {
  ConnectVoiceChannel,
  startMusic,
  DisconnectVoiceChannel,
} from "../actions/music";
import { embedMsg } from "../libs";

export const Channel = async (msg: Message) => {
  if (msg.content === main + "clear") {
    try {
      await msg.channel.bulkDelete(100);
    } catch (error) {
      console.log(error);
    }
  }

  if (msg.content === main + "clear") {
    try {
      await msg.channel.bulkDelete(100);
    } catch (error) {
      console.log(error);
    }
  }

  if (msg.content === main + "connect v") {
    ConnectVoiceChannel(msg);
    startMusic(msg);
  }

  if (msg.content === main + "disconnect v") {
    DisconnectVoiceChannel(msg);
  }
  if (
    msg.content === main + "rules" &&
    msg.channel.id === "700715858451890176"
  ) {
    rulesGames.forEach((rule, i) => {
      msg.channel.send(`${i} . ${rule}`);
    });
    rulesServer.forEach((rule, i) => {
      msg.channel.send(`${i} . ${rule}`);
    });
  }
  if (
    msg.content === main + "rules server" &&
    msg.channel.id === "700715858451890176"
  ) {
    rulesServer.forEach((rule, i) => {
      msg.channel.send(`${i} . ${rule}`);
    });
  }
  if (
    msg.content === main + "rules game" &&
    msg.channel.id === "700715858451890176"
  ) {
    rulesGames.forEach((rule, i) => {
      msg.channel.send(`${i} . ${rule}`);
    });
  }
};
