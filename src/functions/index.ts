import { Message } from "discord.js";
import { links } from "./links";
import { servers } from "./servers";

// Functions
export const messages = async (msg: Message) => {
  links(msg);
  servers(msg);
};
