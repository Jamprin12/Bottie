"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.channel = async (msg) => {
    if (msg.content === "!clear") {
        try {
            const messages = msg.channel.messages;
            console.log(messages);
        }
        catch (err) {
            console.log(err);
        }
    }
};
