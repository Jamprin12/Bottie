"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commands_json_1 = require("../../data/json/commands.json");
const config_json_1 = require("../../data/json/config.json");
exports.Help = (msg) => {
    if (msg.content === config_json_1.main + "help") {
        const data = commands_json_1.commands;
        const helpCommand = data;
        helpCommand.forEach(async (commands) => {
            await msg.channel.send(`${commands.command} : ${commands.info}`);
        });
    }
};
