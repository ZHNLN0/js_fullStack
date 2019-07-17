// pages/category/category.js
const res = require('../../wxapi/request')
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    category: [],
    curIndex: 0,
    toView: "xinping",
    scrollL: true,
    scrollR: true,
    topArr: [],
    heightArr: [10, 735.4000244140625, 1395.800048828125, 2539.800048828125, 3483.60009765625, 4144, 4562.60009765625, 5046.2001953125, 5553.2001953125, 5948.39990234375, 6432, 6892.2001953125, 7310.80029296875, 7617.60009765625, 8254.6005859375, 8826.6005859375, 9398.6005859375, 9640.400390625, 9970.6005859375, 10212.400390625, 10696, 11114.6005859375, 11444.7998046875, 11686.6005859375, 11928.400390625, 12081.7998046875, 12323.6005859375]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCategoryLeft()
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
    var that = this
    setTimeout(function() {
      
      var query = wx.createSelectorQuery()
      //选择id
      let topArr = []
      query.selectAll('.categoryItem').boundingClientRect(function(rect) {
        console.log('------------------',rect)

        rect.forEach((item) => {
          // console.log(item.top)
          topArr.push(item.top)
        })
        console.log(topArr)
        that.setData({
          topArr: topArr
        })
        console.log(that.data.topArr)
      }).exec() 
    },2000)
  },


  getCategoryLeft() {
    res
    .loadCategory()
    .then((res) => {
      console.log(res,'----',this)

      this.setData({
        category: res.data
      })
    })
  },
  

  switchTab(e) {
    console.log(e)
    this.setData({  
      curIndex: e.target.dataset.index,
      toView: e.target.dataset.id
    })
  },

  onScroll(e){
    console.log(e)
    let self = this
    let scrollTop = e.detail.scrollTop
    let heightArr = self.data.heightArr 
    let length = heightArr.length
    console.log(length)
      for (let i = 0; i < length; i++) {
        console.log(111)
      if (scrollTop >= 0 && scrollTop < heightArr[0]) {
        console.log(222)
        this.setData({
          curIndex: 0
        })
      } else if(scrollTop >= heightArr[i-1] && scrollTop < heightArr[i]) {
        console.log(333)
         this.setData({
          curIndex: i
        })
      }
    }
    
    console.log(heightArr)
    console.log(scrollTop)
    console.log(this.data.curIndex)
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