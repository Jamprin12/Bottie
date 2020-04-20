import { Message } from "discord.js";
import { main } from "../../data/json/config.json";
import { servers as server } from "../../data/json/servers.json";
import fs from "fs";
import path from "path";

const pathServer = path.join(__dirname, "../../data/json/servers.json");

export const Servers = async (msg: Message) => {
  const data = server;
  const servers = data;

  // Receiving  the messages
  if (msg.content === main + "servers") {
    if (!servers.length) {
      msg.channel.send("There aren't servers");
    } else {
      server.forEach(async (server: string, i: number) => {
        await msg.channel.send(`${i + 1}: ${server}`);
      });
    }
  }

  if (msg.content.startsWith(main + "servers add")) {
    const split = msg.content.split(" ");
    const serverName = split[2];

    if (
      serverName === undefined ||
      serverName === " " ||
      serverName === "undefined"
    ) {
      msg.channel.send("The name server is invalid");
    } else if (serverName === "<name") {
      return;
    } else {
      servers.push(serverName);
      const serversJSON = {
        servers,
      };

      fs.writeFile(pathServer, JSON.stringify(serversJSON), finish);

      async function finish() {
        await msg.channel.send("Already has added the server " + serverName);
      }
    }
  }

  if (msg.content === main + "servers clean all") {
    servers.forEach(() => {
      servers.pop();
    });

    const serversJSON = {
      servers: [],
    };

    fs.writeFile(pathServer, JSON.stringify(serversJSON), finish);

    async function finish() {
      await msg.channel.send("Already has removed all servers");
    }
  }

  if (msg.content.startsWith(main + "servers remove")) {
    const split = msg.content.split(" ");
    const serverIndex = split[2];
    const index = parseInt(serverIndex);
    if (serverIndex === "All" || index === NaN) {
      msg.channel.send("The index server is invalid");
    } else {
      server.splice(index, 1);

      const serversJSON = {
        servers,
      };

      fs.writeFile(pathServer, JSON.stringify(serversJSON), finish);

      async function finish() {
        await msg.channel.send(
          `Already has removed server number ${index + 1}`
        );
      }
    }
  }
};
