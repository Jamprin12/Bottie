import { MessageEmbed } from "discord.js";

export function embedMsg(props: any) {
  const embed: MessageEmbed = new MessageEmbed()
    .setTitle(props.title)
    .setColor(props.color)
    .setDescription(props.description ? props.description : "");
  return embed;
}
