    class Anime {
        constructor(options) {
       
            if(!options.embedFooter) throw new TypeError('Missing argument embedFooter')
            if(typeof options.embedFooter !== 'string') throw new TypeError('embedFooter must be a string')
    
            if(!options.embedTitle) throw new TypeError('Missing argument embedTitle')
            if(typeof options.embedTitle !== 'string') throw new TypeError('embedTitle must be a string')
    
            if(!options.embedColor) throw new TypeError('Missing argument embedColor')
            if(typeof options.embedColor !== 'string') throw new TypeError('embedColor must be a string')
            if(!options.message) throw new TypeError('Missing argument: message')
    
            this.message = options.message;
            this.embedFooter = options.embedFooter
            this.embedTitle = options.embedTitle
            this.embedColor = options.embedColor
        }
        async cuddle(){
const Discord = require('discord.js');
const axios = require('axios');

    const url = 'https://api.waifu.pics/sfw/cuddle';

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return this.message.channel.send(`An error occured!`)
        }

        const embed = new Discord.MessageEmbed()
            .setTitle(this.embedTitle)
            .setColor(this.embedColor)
            .setImage(data.url)
            .setFooter(this.embedFooter)

        await this.message.channel.send(embed)
    }
}
module.exports = Anime;        