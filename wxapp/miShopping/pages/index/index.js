//index.js
//获取应用实例
const res = require('../../wxapi/request')
const app = getApp()

Page({
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 500,
    indicatorColor: "#f4f4fd",
    indicatorActiveColor: "#fcfcff",
    swiper: [],
    cells: [],
    products:[],
    test: true
  },

  onLoad: function () {
    // this.getSwiper()
    this.getCells()
    // this.getProducts()
  },
  getSwiper() {
    var that = this
    res
      .loadIndex()
      .then((res) => {
        console.log(res.data.data.sections[0])
        that.setData({
          swiper: res.data.data.sections[0]
        })
      })
  },
  getCells() {
    var that = this
    res
      .loadIndex()
      .then((res) => {
        console.log(res)
        that.setData({
          cells: res
        })
      })
  },
  getProducts() {
    res.loadProducts() 
    .then((res) => {
      console.log(res)
      this.setData({
        products: res.data
      })
    })
  },

  
})