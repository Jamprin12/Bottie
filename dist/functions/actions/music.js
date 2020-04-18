"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// export function startMusic(msg: Message) {
//   let canalvoz = msg.member?.voice.channel;
//   if (!canalvoz)
//     return msg.channel.send("¡Necesitas unirte a un canal de voz primero!.");
//   if (!args.join(" "))
//     return msg.channel.send(
//       "Ingrese un enlace de youtube para poder reproducirlo."
//     );
//   canalvoz
//     .join()
//     .then((connection) => {
//       const url = ytdl(args.join(" "), { filter: "audioonly" });
//       const dispatcher = connection.play(url);
//       msg.delete();
//       msg.channel.send("Reproduciendo ahora: " + args.join(" "));
//     })
//     .catch(console.error);
// }
function ConnectVoiceChannel(msg) {
    var _a, _b, _c;
    let voiceChannel = (_a = msg.member) === null || _a === void 0 ? void 0 : _a.voice.channel;
    if (!voiceChannel || voiceChannel.type !== "voice") {
        msg.channel.send("¡Need join to a channel voice!");
    }
    else if ((_c = (_b = msg.guild) === null || _b === void 0 ? void 0 : _b.voice) === null || _c === void 0 ? void 0 : _c.connection) {
        msg.channel.send("I'm ready here");
    }
    else {
        msg.channel
            .send("Connecting...")
            .then((m) => {
            voiceChannel
                .join()
                .then(() => {
                m.edit("Connect Successfully").catch((error) => console.log(error));
            })
                .catch((error) => console.log(error));
        })
            .catch((error) => console.log(error));
    }
}
exports.ConnectVoiceChannel = ConnectVoiceChannel;
function DisconnectVoiceChannel(msg) {
    var _a;
    let voiceChannel = (_a = msg.member) === null || _a === void 0 ? void 0 : _a.voice.channel;
    if (!voiceChannel) {
        msg.channel.send("¡Need join to a channel voice!");
    }
    else {
        msg.channel
            .send("Left voice channel")
            .then(() => {
            voiceChannel.leave();
        })
            .catch((error) => console.log(error));
    }
}
exports.DisconnectVoiceChannel = DisconnectVoiceChannel;
