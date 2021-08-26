  
const tiktok = require('.')
const url = 'https://www.tiktok.com/@darwinmuseum/video/6998173743524744449'


tiktok.tikTokNoWatermark(url)
     .then(result => {
          console.log(result)
     })
     .catch(e => console.log(e))