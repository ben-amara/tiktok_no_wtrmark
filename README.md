<p align="center">
<img src="https://raw.githubusercontent.com/ben-amara/tiktok_video_no_wtrmark/master/src/media/ttk.webp" width="128" height="128"/>
</p>



# Tiktok-Scraper-video-no-Watermark

## Required
- Nodejs ( <a href="https://nodejs.org/en/download">download here</a> )

## Install it

``` npm i tiktok-scraper-no-watermark ```

## Usage


- demo

```
const tiktok = require('tiktok-scraper-no-watermark')
const url = 'https://www.tiktok.com/@youneszarou/video/6942436555692805381'


tiktok.tikTokNoWatermark(url)
     .then(result => {
          console.log(result)
     })
     .catch(e => console.log(e))
```