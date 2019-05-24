// pages/category/category.js
const WXAPI = require('../../wxapi/main')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    category: [],
    categoryItem:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCategory(),
    this.getCategoryItem()
  },
  getCategory() {
    WXAPI
    .loadCategory()
    .then((res) => {
      // console.log(res.data.category)
      if(res.data.code === 0) {
        this.setData({
          category: res.data.category
        })
      }
    })
  },
  getCategoryItem() {
    WXAPI
    .loadCategoryItem()
    .then((res) => {
      if(res.data.code === 0) {
        console.log(res.data.categoryItem)
        this.setData({
          categoryItem: res.data.categoryItem
        })
        
      }
    })
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

  }
})