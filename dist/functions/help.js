"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commands_json_1 = require("../data/commands.json");
exports.help = (msg) => {
    if (msg.content === "!help") {
        const data = commands_json_1.commands;
        const helpCommand = data[1].command;
        msg.channel.send(helpCommand);
    }
};
