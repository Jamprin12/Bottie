

// Functions
const messages = async msg => {
    // const serverJson = JSON.parse(fs.readFileSync('../data/server.json'));
    // let dataPath = path.join(__dirname, '../data');
    const servers = ["skyzora.aternos.me"];


    // Receiving  the messages
    if (msg.content === "!servers") {
        if (!servers.length) {
            msg.channel.send('No hay servidores')
        } else {
            msg.channel.send(servers)
        }
    }

    if (msg.content.startsWith('!server add')) {
        const split = msg.content.split(' ');
        const serverName = split[2];

        servers.push(serverName);
        // fs.writeFile(dataPath, JSON.stringify(servers), () => console.log("Works"));

        msg.channel.send('Ya ha sido agregado el servidor ' + serverName)
    }

    if (msg.content === "!pin") {
        msg.channel.send('https://pinterest.com/');
    }

    if (msg.content === "!insta") {
        msg.channel.send('https://instagram.com/');
    }

}

export default messages