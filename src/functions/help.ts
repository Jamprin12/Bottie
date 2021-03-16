import { Message } from "discord.js";
import { commands } from "../data/commands.json";
import { prefix } from "../data/config.json";
import { embedMsg } from "../utils/embedMessage";
import { withCommand } from "../utils/withCommand";

type Command = {
  command: string;
  info: string;
};

export const Help = async (msg: Message) => {
  const command = withCommand(prefix, msg.content);

  if (command("help")) {
    const helpCommands = commands.map(
      (commands: Command) => `${commands.command} : ${commands.info}`
    );

    await msg.channel.send(
      embedMsg({
        title: "Commands",
        color: "#fafafa",
        description: helpCommands.join("\n"),
      })
    );
  }

  return msg;
};
