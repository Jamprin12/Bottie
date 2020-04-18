"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_json_1 = require("../../data/json/config.json");
exports.Members = async (msg) => {
    var _a, _b;
    if (msg.content === config_json_1.main + "kick") {
        if ((_a = msg.member) === null || _a === void 0 ? void 0 : _a.hasPermission("ADMINISTRATOR")) {
            const member = (_b = msg.mentions.members) === null || _b === void 0 ? void 0 : _b.first();
            if (member) {
                const kickMember = await member.kick();
                msg.channel.send(`${kickMember.user.username} hass been kicked`);
            }
        }
        return msg.reply("You don't have permissions");
    }
};
