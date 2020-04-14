"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_json_1 = require("../../data/config.json");
exports.links = (msg) => {
    if (msg.content === config_json_1.link + " pin") {
        msg.channel.send("https://pinterest.com/");
    }
    if (msg.content === config_json_1.link + " insta") {
        msg.channel.send("https://instagram.com/");
    }
};
