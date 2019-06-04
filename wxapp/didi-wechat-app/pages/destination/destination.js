// pages/destination/destination.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  searchInput(e) {
    const value = e.detail.value;
    app.globalData.qqmapsdk.getSuggestion({
      keyword: value,
      region: '南昌',
      success: (res) => {
        this.setData({
          address: res.data
        })
      }
    })
  },
  toIndex(e) {
    // 地址简写
    const destination = e.currentTarget.dataset.destination;
    // 详细地址
    const eddAddress = e.currentTarget.dataset.end;
    app.globalData.destination = destination;
    wx.navigateTo({
      url: '../index/index'
    })
  }
})