const randomPuppy = require('random-puppy');
const Discord = require('discord.js');

module.exports = {
    name: "meme",
    async run (client, message, args) {
        const subReddits = ["dankmemes"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)]

        const img = await randomPuppy(random);

        const memeEmbed = new Discord.MessageEmbed()
        .setImage(img)
        .setTitle(`Your meme. from r/${random}`)
        .setURL(`https://reddit.com/r/${random}`)

        message.channel.send(memeEmbed);

    }
}