基于 Vue 2.0 + vuex + vueRouter 全家桶实现方案来模拟网易云音乐WebApp项目 css预编译工具的Sass, 音乐上下滚动加载用的是betterscroll，全面采用ES6风格代码
 
解决了哪些问题
- 图片懒加载 vue-lazyload
- 前后端分离
  使用node.js NeteaseCloudMusicAPI Proxy  8080 + 3000
- fastclick 
- 设计了store
  songs index song singer mode favoriteList searchHistory playHistory
- iconfont
- eslint

- 上班，vue项目，分析清楚目录结构
  1.  components/ 跟路由挂钩 工作的路口
  2. store/ 全局共享 分模块 了解关键状态
  3. common/ 公共组件不用谢
  4. api/ 前后端的写作方式