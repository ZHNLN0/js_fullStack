Page({
  onLoad: function() {
    this.popup = this.selectComponent('#popup')
  },
  showPopup: function() {
    // 弹窗
    this.popup.showPopup();
  },
  _error: function() {
    this.popup.hidePopup();
  },
  _success: function() {
    this.popup.hidePopup();
  },
  change: function(e) {
    // console.log('catch')
    var mComponent = this.selectComponent('#myComponent');
    mComponent.setText('外部点用了');
  },
  onTextChange: function() {
    wx.showToast({
      title: '捕获事件'
    })
  }
})