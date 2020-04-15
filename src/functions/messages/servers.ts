import { Message } from "discord.js";
import { main } from "../../data/json/config.json";
import { servers as server } from "../../data/json/servers.json";
import fs from "fs";
import path from "path";

export const Servers = async (msg: Message) => {
  const data = server;
  const servers = data;

  // Receiving  the messages
  if (msg.content === main + "servers") {
    if (!servers.length) {
      msg.channel.send("There aren't servers");
    } else {
      server.forEach(async (server: string) => {
        await msg.channel.send(`${server}`);
      });
    }
  }

  if (msg.content.startsWith(main + "servers add")) {
    const split = msg.content.split(" ");
    const serverName = split[2];

    servers.push(serverName);

    const serversJSON = {
      servers,
    };

    fs.writeFile(
      path.join(__dirname, "../data/servers.json"),
      JSON.stringify(serversJSON),
      finish
    );

    async function finish() {
      await msg.channel.send("Already has added the server " + serverName);
    }
  }

  if (msg.content === main + "servers clean all") {
    servers.forEach(() => {
      servers.pop();
    });

    const serversJSON = {
      servers,
    };

    fs.writeFile(
      path.join(__dirname, "../data/servers.json"),
      JSON.stringify(serversJSON),
      finish
    );

    async function finish() {
      await msg.channel.send("Already has removed all servers");
    }
  }
};
