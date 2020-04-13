import { Message } from "discord.js";

export const servers = (msg: Message) => {
  const servers = ["skyzora.aternos.me"];

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
    // fs.writeFile(dataPath, JSON.stringify(servers), () => console.log("Works"));

    msg.channel.send("Already has added the server " + serverName);
  }
};
