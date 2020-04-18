"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_json_1 = require("../../data/json/config.json");
const links_json_1 = __importDefault(require("../../data/json/links.json"));
exports.Links = async (msg) => {
    if (msg.content === config_json_1.link + " pin") {
        msg.channel.send(`${links_json_1.default[0].pin}`);
    }
    if (msg.content === config_json_1.link + " insta") {
        msg.channel.send(`${links_json_1.default[1].insta}`);
    }
};
