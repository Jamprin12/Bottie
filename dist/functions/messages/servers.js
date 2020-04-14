"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_json_1 = require("../../data/json/config.json");
const servers_json_1 = require("../../data/json/servers.json");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
exports.Servers = async (msg) => {
    const data = servers_json_1.servers;
    const servers = data;
    // Receiving  the messages
    if (msg.content === config_json_1.main + "servers") {
        if (!servers.length) {
            msg.channel.send("There aren't servers");
        }
        else {
            servers_json_1.servers.forEach(async (server) => {
                await msg.channel.send(`${server}`);
            });
        }
    }
    if (msg.content.startsWith(config_json_1.main + "server add")) {
        const split = msg.content.split(" ");
        const serverName = split[2];
        servers.push(serverName);
        const serversJSON = {
            servers,
        };
        fs_1.default.writeFile(path_1.default.join(__dirname, "../data/servers.json"), JSON.stringify(serversJSON), finish);
        async function finish() {
            await msg.channel.send("Already has added the server " + serverName);
        }
    }
    if (msg.content === config_json_1.main + "servers clean all") {
        servers.forEach(() => {
            servers.pop();
        });
        const serversJSON = {
            servers,
        };
        fs_1.default.writeFile(path_1.default.join(__dirname, "../data/servers.json"), JSON.stringify(serversJSON), finish);
        async function finish() {
            await msg.channel.send("Already has removed all servers");
        }
    }
};
