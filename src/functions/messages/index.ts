import { Message } from "discord.js";
import { links } from "./links";
import { servers } from "./servers";
import { members } from "./mebers";
import { help } from "./help";
import { channel } from "./channel";

// Functions
export const messages = async (msg: Message) => {
  channel(msg);
  links(msg);
  servers(msg);
  members(msg);
  help(msg);
};
