- 小程序开发工具，初始化了一个项目框架
    小程序是架构在微信（原生App），使用前端技术和思想，来快速开发，一份代码，到处运行。

    不用下载，
    不用写两次
    快速高效

- html =>  wxml (新标签)
  css  =>  wxss 
  js   =>  js          bindtap => onclick
  page = wxml + wxss + js
  小程序有一个个page组成，每个page又由这三部分组成

  weixin wxml? xml 为了它的性能优化以及新功能
  有哪些新的标签 view = div

  app.json是项目描述文件 添加的page要在app.json里声名切页面时，wx.navigateTo()

- MVVM 
    只要你有了数据，Model，在js中用data声名
    Page({
        data:{
            legends:[]
        }
    })
    View 视图层 WXML 等待的数据编译输出的html模板 {{}}
    指令，wx:for 