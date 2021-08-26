const { default: Axios } = require('axios')

function tikTokNoWatermark(url) {

     return new Promise(async(resolve, reject) => {
          var options = {
               method: 'GET',
               url: 'https://tiktok-download-video-no-watermark.p.rapidapi.com/tiktok/info',
               params: {'url': `${url}`},
               headers: {
                 'x-rapidapi-host': 'tiktok-download-video-no-watermark.p.rapidapi.com',
                 'x-rapidapi-key': 'd09312ed5amshe9daa679bd64690p1a0ce4jsna9c22155134c'
               }
             };
             
             Axios.request(options).then((res) => {
               resolve({ status: true, result: res.data })
             }).catch((e) => reject(e));                   
     });
}

module.exports.tikTokNoWatermark = tikTokNoWatermark