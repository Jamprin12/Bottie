import { Message } from "discord.js";
import { Box } from "../utils/Box";
import { channel } from "./channel";
import { coins } from "./coins";
import { members } from "./mebers";
import { server } from "./server";

export const commmandMessages = async (msg: Message) => {
  Box(msg).map(channel).map(server).map(coins).map(members);
};
