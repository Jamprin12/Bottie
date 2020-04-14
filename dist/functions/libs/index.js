"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
function embedMsg(props) {
    const embed = new discord_js_1.MessageEmbed()
        .setTitle(props.title)
        .setColor(props.color)
        .setDescription(props.description);
    return embed;
}
exports.embedMsg = embedMsg;
