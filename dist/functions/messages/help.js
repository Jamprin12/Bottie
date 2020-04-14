"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commands_json_1 = require("../../data/commands.json");
const config_json_1 = require("../../data/config.json");
exports.help = (msg) => {
    if (msg.content === config_json_1.main + "help") {
        const data = commands_json_1.commands;
        const helpCommand = data;
        helpCommand.forEach(async (commands) => {
            await msg.channel.send(`${commands.command}  :  ${commands.info}`);
        });
    }
};
