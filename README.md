<h1 align="center">djs-anime</h1>
<p align="center">
   
   <br>
   <a href="https://www.npmjs.com/package/djs-anime"><img src="https://nodei.co/npm/djs-anime.png?downloadRank=true&downloads=true&downloadRank=true&stars=true" /></a>
</p>



# Note
- DISCORD V12 - npm i djs-anime 
- DISCORD V13 - npm i djs-anime@dev

# About
A discord.js Anime Package with With Many Anime Related Commands and Features!
Join our [Support Server](https://discord.gg/jDP2FbvCdk) for help
# Installation

```npm i djs-anime```

# Example usage

```
USE ACCORDING TO YOUR COMMAND HANDLER
```

**ANIME GIFs**
=== 

```js
 const { Anime } = require('djs-anime')
    const gif = new Anime({
    message: message,
    embedFooter: "Testing", //The Footer of the embed
    embedTitle: "Anime Gifs", //The title of the embed
    embedColor: "RANDOM", //The color of the embed! (Use Hex codes or use the color name)
    })
    gif.hug()

```
### AVAILABLE CATAGORIES:
Category | usage |
|---|---|
| Cuddle| gif.cuddle() |
| Kiss | gif.kiss() | 
| Hug | gif.hug() | 
| Bully | gif.kiss() | 
| Poke | gif.poke() | 
| Kick | gif.kick() |
| Slap | gif.slap() |
| Happy | gif.happy() |
| Kill | gif.kill() |
| Wink | gif.wink() |
| Dance | gif.dance() |
| Cringe | gif.cringe() |
| Bite | gif.bite() | 
| Handhold | gif.handhold() |   
| Wave| gif.wave() |
| highfive | gif.highfive() |       
| Smile | gif.smile() |   
| Blush | gif.blush() | 
| Yeet | gif.yeet() |
| Bonk | gif.bonk() |  
| Smug | gif.smug() | 
| Pat | gif.pat() |
| Lick | gif.lick() |
| Cry | gif.cry() |   

**ANIME QUOTES**
=== 
## Random Quote
```js
const { Quote } = require('djs-anime')
const quote = new Quote({
    message: message,
    embedTitle: "Anime Quotes", //The title of the embed
    embedColor: "RANDOM", //The color of the embed! (Use Hex codes or use the color name)
    })
    quote.random()
```

## Anime Title Quote
```js
const { Quote } = require('djs-anime')
const quote = new Quote({
    message: message,
    embedTitle: "Anime Quotes", //The title of the embed
    embedColor: "RANDOM", //The color of the embed! (Use Hex codes or use the color name)
    title: "Naruto" //The anime you want the quote from
    })
    quote.anime()
```



# Credits
API USED: https://waifu.pics/

# Help

Join our [Support Server](https://discord.gg/jDP2FbvCdk) for help
