//index.js
//获取应用实例
// 全局变量 计数器
let interval = null;
// 旋转速度 
let inTime = 50;
const app = getApp()

Page({
  data: {
    color: [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
    //9张奖品图片
    images: ['/images/item.png', '/images/item1.png', '/images/item.png', '/images/item1.png', '/images/item.png', '/images/item1.png', '/images/item.png', '/images/item1.png', '/images/item.png'],
    btnconfirm: '/images/dianjichoujiang.png',
    clickLuck: 'clickLuck',
    luckPositiom: 0
  },
  loadAnmiation() {
    let self = this;
    let index = 0;
    interval = setInterval(() => {
      if (index > 7) {
        index = 0;
        self.data.color[7] = 0.5
      } else if (index != 0) {
        self.data.color[index - 1] = 0.5
      }
      self.data.color[index] = 1;
      self.setData({
        color: self.data.color
      })
      index++;
    }, 1000)
  },
  clickLuck() {
    let self = this;
    // 判断中奖的位置
    if (self.data.luckPositiom == null || isNaN(self.data.luckPositiom) || self.data.luckPositiom > 7) {
      wx.showModal({
        title: '提示',
        content: '请填写正确的位置',
        showCancel: false
      })
      return
    }
    // 设置按钮不可点击
    self.setData({
      btnconfirm: '/images/dianjichoujiangd.png',
      clickLuck: ''
    })
    // 清空定时器
    let index = 0;
    interval = setInterval(() => {
      if (index > 7) {
        index = 0;
        self.data.color[7] = 0.5
      } else if (index != 0) {
        self.data.color[index - 1] = 0.5
      }
      self.data.color[index] = 1;
      self.setData({
        color: self.data.color
      })
      index++;
    }, inTime)
    let stopTime = 2000;
    setTimeout(() => {
      self.stop(self.data.luckPositiom)
    }, stopTime)
  },
  stop(which) {
    let self = this;
    clearInterval(interval)
    // 初始化当前位置
    let current = -1;
    let color = self.data.color
    for (let i = 0; i < color.length; i++) {
      if (color[i] == 1) {
        current = i
      }
    }
    let index = current + 1;
    self.stopLuck(which, index, inTime, 10);
  },
  stopLuck(which, index, time, splittime) {
    let self = this;
    let color = self.data.color;
    setTimeout(() => {
      if (index > 7) {
        index = 0;
        color[7] = 0.5;
      } else if (index != 0) {
        color[index - 1] = 0.5
      }
      color[index] = 1;
      self.setData({
        color
      })
      // 如果旋转时间太短或者当前位置不等于中奖位置
      if (time < 400 || index != which) {
        splittime++;
        time += splittime;
        index++;
        self.stopLuck(which, index, time, splittime);
      } else {
        setTimeout(() => {
          if (which == 1 || which == 3 || which == 5 || which == 7) {
            wx.showModal({
              title: '提示',
              content: '恭喜中奖',
              showCancel: false,
              success(res) {
                self.setData({
                  btnconfirm: '/images/dianjichoujiangd.png',
                  clickLuck: 'clickLuck'
                })
                self.loadAnmiation()
              }
            })
          } else {
            wx.showModal({
              title: '提示',
              content: '很遗憾，没有中奖',
              showCancel: false,
              success(res) {
                self.setData({
                  btnconfirm: '/images/dianjichoujiangd.png',
                  clickLuck: 'clickLuck'
                })
                self.loadAnmiation()
              }
            })
          }
        }, 1000)
      }
    }, time)
  },
  input(e){
    console.log(e)
    this.setData({
      luckPositiom: e.detail.value
    })
  },






  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    // ！作用域
    // this.loadAnmiation()
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})