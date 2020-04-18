"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_json_1 = require("../../data/json/config.json");
const music_1 = require("../actions/music");
exports.Channel = async (msg) => {
    if (msg.content === config_json_1.main + "clear" || msg.content === "cls") {
        try {
            await msg.channel.bulkDelete(100);
        }
        catch (error) {
            console.log(error);
        }
    }
    if (msg.content === config_json_1.main + "music join") {
        music_1.ConnectVoiceChannel(msg);
    }
    if (msg.content === config_json_1.main + "music play") {
        // startMusic(msg)
    }
    if (msg.content === config_json_1.main + "music leave") {
        music_1.DisconnectVoiceChannel(msg);
    }
};
