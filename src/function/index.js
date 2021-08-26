const { default: Axios } = require('axios')
const fs = require('fs');
const path = require('path');

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
              downloadFile(res.data.data.video_link_nwm, res.data.data.video_id)
               //resolve({ status: true, result: res.data.video_id })
             }).catch((e) => reject(e));                   
     });
}

const downloadFile = async (fileUrl, file_id) => {
  try {
    const response = await Axios({
      method: 'GET',
      url: fileUrl,
      responseType: 'stream',
    });

    const w = response.data.pipe(fs.createWriteStream(`./${file_id}.mp4`));
    w.on('finish', () => {
      console.log('Successfully downloaded file!');
    });
  } catch (err) {
    throw new Error(err);
  }
}; 

module.exports.tikTokNoWatermark = tikTokNoWatermark