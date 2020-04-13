"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.links = (msg) => {
    if (msg.content === "!pin") {
        msg.channel.send("https://pinterest.com/");
    }
    if (msg.content === "!insta") {
        msg.channel.send("https://instagram.com/");
    }
};
