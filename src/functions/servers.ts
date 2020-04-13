import { Message } from "discord.js";
import fs from "fs";
import { servers as server } from "../data/servers.json";

export const servers = (msg: Message) => {
  const servers = server;
  console.log(servers);

  // Receiving  the messages
  if (msg.content === "!servers") {
    if (!servers.length) {
      msg.channel.send("There aren't servers");
    } else {
      msg.channel.send(servers);
    }
  }

  if (msg.content.startsWith("!server add")) {
    const split = msg.content.split(" ");
    const serverName = split[2];

    servers.push(serverName);

    msg.channel.send("Already has added the server " + serverName);
  }
};
