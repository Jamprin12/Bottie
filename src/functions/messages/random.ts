import { Message } from "discord.js";
import { main } from "../../data/json/config.json";


const {round, random} = Math

export const Random = async (msg: Message) => {
  if (msg.content === main + "random") {
    const randomN = round(random() * 100000);
    msg.channel.send(randomN);
  }

  if (msg.content === main + "random list") {
    const randomLength = round(random() * 20);

    const randomList = new Array(randomLength);

    for (let i = 0; i < randomList.length; i++) {
        let element = randomList[i];

        element = round(random() * 100);
        await msg.channel.send(element);
    }   
   }
};