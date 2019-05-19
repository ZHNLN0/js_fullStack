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
    swiperImgUrls: [],
    navBarUrl: [],
    recommendList: []
  },
  //事件处理函数
  
  onLoad: function () {
    this.getSwiperImg(),
    this.getNavBarUrl(),
    this.getRecommend()
  },
  getSwiperImg () {
    WXAPI
      .loadSwip({recommendStatus: 1})
      .then((res) => {
        if(res.data.code === 0) {
          // console.log(res.data.swiperImgUrl) 
          this.setData({
            swiperImgUrls: res.data.swiperImgUrl
          })
        }
      })
  },
  getNavBarUrl () {
    WXAPI
    .loadNavBar()
    .then((res) => {
      if(res.data.code === 0) {
        // console.log(res.data.navBarUrl)
        this.setData({
          navBarUrl: res.data.navBarUrl
        })
      }
    })
  },
  getRecommend () {
    WXAPI
    .loadRecommend()
    .then((res) => {
      if(res.data.code === 0) {
        console.log(res.data.recommendList)
        this.setData({
          recommendList: res.data.recommendList
        })
      }
    })
  }
})
