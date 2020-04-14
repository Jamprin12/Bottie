import { Message } from "discord.js";
import { Links } from "./links";
import { Servers } from "./servers";
import { Members } from "./mebers";
import { Help } from "./help";
import { Channel } from "./channel";

// Functions
export const messages = async (msg: Message) => {
  Channel(msg);
  Links(msg);
  Servers(msg);
  Members(msg);
  Help(msg);
};
