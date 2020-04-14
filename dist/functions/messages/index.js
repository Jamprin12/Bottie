"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const links_1 = require("./links");
const servers_1 = require("./servers");
const mebers_1 = require("./mebers");
const help_1 = require("./help");
const channel_1 = require("./channel");
// Functions
exports.messages = async (msg) => {
    channel_1.Channel(msg);
    links_1.Links(msg);
    servers_1.Servers(msg);
    mebers_1.Members(msg);
    help_1.Help(msg);
};
