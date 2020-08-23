const infoEmbed = {
    color: 0x799464,
    title: "Bot Info",
    fields: [
        {
            name: "GitHub Repository",
            value: "https://github.com/genovevafossas/EK400",
            inline: true
        },
        {
            name: "Author",
            value: "@Rainier#1600",
            inline: true
        }
    ]
};

exports.run = exports.run = (bot, message, args) => {
    message.channel.send(message.author, {embed: infoEmbed});
}