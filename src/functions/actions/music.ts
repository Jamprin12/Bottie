import { Message } from "discord.js";
import ytdl from "ytdl-core";
import { music } from "../../data/json/music.json";
export function startMusic(msg: Message) {
  let voiceChannel = msg.member?.voice.channel;
  let args = music;
  if (!voiceChannel)
    return msg.channel.send("¡Necesitas unirte a un canal de voz primero!.");
  if (!args.join(" "))
    return msg.channel.send(
      "Ingrese un enlace de youtube para poder reproducirlo."
    );

  voiceChannel
    .join()
    .then((connection) => {
      const url = ytdl(args.join(" "), { filter: "audioonly" });
      console.log(url);
      const dispatcher = connection;
      dispatcher.play(url);

      msg.delete();
      msg.channel.send("Reproduciendo ahora: " + args.join(" "));
    })
    .catch(console.error);
}

export function ConnectVoiceChannel(msg: Message) {
  let voiceChannel: any = msg.member?.voice.channel;

  if (!voiceChannel || voiceChannel.type !== "voice") {
    msg.channel.send("¡Need join to a channel voice!.");
  } else if (msg.guild?.voice?.connection) {
    msg.channel.send("I'm ready here");
  } else {
    msg.channel
      .send("Connecting...")
      .then((m) => {
        voiceChannel
          .join()
          .then(() => {
            m.edit("Connect Successfully").catch((error) => console.log(error));
          })
          .catch((error: Error) => console.log(error));
      })
      .catch((error: Error) => console.log(error));
  }
}

export function DisconnectVoiceChannel(msg: Message) {
  let voiceChannel: any = msg.member?.voice.channel;

  if (!voiceChannel) {
    msg.channel.send("¡Need join to a channel voice!");
  } else {
    msg.channel
      .send("Left voice channel")
      .then(() => {
        voiceChannel.leave();
      })
      .catch((error: any) => console.log(error));
  }
}
