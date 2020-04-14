"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../libs/index");
const commands_json_1 = require("../../data/json/commands.json");
const config_json_1 = require("../../data/json/config.json");
exports.Help = (msg) => {
    if (msg.content === config_json_1.main + "help") {
        const data = commands_json_1.commands;
        const helpCommand = data;
        helpCommand.forEach(async (commands) => {
            const embed = index_1.embedMsg({
                title: commands.command,
                description: commands.info,
                color: "#222",
            });
            await msg.channel.send(embed);
        });
    }
};
