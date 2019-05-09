- 一套好的UI
  app.wxss 全局样式
- 组件思想
  界面中相对独立的显示区块，抽成组件 
  意义: 界面有组件构成，不是由标签构成，组件可以复用
- 项目之中所有的请求都封装带 api 目录下面
  module.exports =
  require 
- wx.startPullDownRefresh();  下拉刷新    onload  把生命周期交给 onPullDownRefresh()  
  api 请求
  wx.stopPullDownRefresh()
- 复杂羡慕的组件数量比较多 
  /style/base.wxss 多个组件都依赖的基础样式

