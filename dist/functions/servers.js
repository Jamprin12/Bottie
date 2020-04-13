"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const servers_json_1 = require("../data/servers.json");
exports.servers = (msg) => {
    const servers = servers_json_1.servers;
    console.log(servers);
    // Receiving  the messages
    if (msg.content === "!servers") {
        if (!servers.length) {
            msg.channel.send("There aren't servers");
        }
        else {
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
