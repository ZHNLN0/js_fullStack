//index.js
//获取应用实例
const app = getApp()
import util from '../../utils/index'

Page({
  data: {
   navData: [],
   currentTab: 1,
   scrollLeft: 0,
   isLoading: true,
   address: '',
   destination: null,
   callCart: false
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    this.requestCart();
  },
  onShow() {
    this.setData({
      address: app.globalData.address,
      destination: app.globalData.destination,
    })
  },
  toCast() {
    this.setData({
      callCart: true
    })
  },
  requestCart(){
   util.request({
     url: 'https://www.easy-mock.com/mock/5cce35cf2afdcd7c8714550c/didi-wxapp/didi-wxapp'
   })
   .then((res) => {
     console.log(res)
     this.setData({
       navData: res.data.navData,
       cost: res.data.cost
     })
   })
   },
   switchNav(event) {
    const cart = event.currentTarget.dataset.name;
    const cur = event.currentTarget.dataset.current;
    const info = wx.getSystemInfoSync();
    const windowWidth = info.windowWidth;
    const perNavWidth = windowWidth / 8;
    this.setData({
      cart,
      currentTab: cur,
      scrollLeft: (cur-1) *perNavWidth
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
