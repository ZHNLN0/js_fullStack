//index.js
//获取应用实例
const WXAPI = require('../../wxapi/main')
const app = getApp()

Page({
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 500,
    indicatorColor: "#f4f4fd",
    indicatorActiveColor: "#fcfcff",
    swiperImgUrls: []
  },
  //事件处理函数
  
  onLoad: function () {
    this.getSwiperImg()
  },
  getSwiperImg () {
    WXAPI
      .loadSwip({recommendStatus: 1})
      .then(res => {
        if(res.data.code === 0) {
          console.log(res.data.swiperImgUrl) 
          this.setData({
            swiperImgUrls: res.data.swiperImgUrl
          })
        }
      })
  },
})
