"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const links_1 = require("./links");
const servers_1 = require("./servers");
// Functions
exports.messages = async (msg) => {
    links_1.links(msg);
    servers_1.servers(msg);
};
