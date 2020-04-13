"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const links_1 = require("./links");
// import { servers } from "./servers";
const mebers_1 = require("./mebers");
const help_1 = require("./help");
const channel_1 = require("./channel");
// Functions
exports.messages = async (msg) => {
    channel_1.channel(msg);
    links_1.links(msg);
    // servers(msg);
    mebers_1.members(msg);
    help_1.help(msg);
};
