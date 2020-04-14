"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_json_1 = require("../../data/config.json");
exports.channel = async (msg) => {
    if (msg.content === config_json_1.main + "clear") {
        try {
            await msg.channel.bulkDelete(100);
        }
        catch (error) {
            console.log(error);
        }
    }
};
