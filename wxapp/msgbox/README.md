- 组件思维
 弹窗组合了一些标签，形成了独立的弹窗共能，在其他页面也要用到，组合一个人独立的组件
 <dialog />
 页面是由组件拼装而成的。

- 组件语法
 同于Page 又有异
 Component({
     data: {},
     properties: {
         <!-- 属性类型定义 -->
         title: {
             type: String,
             value: '标题'
         }
     },
     methods: {
         
     }
 })

- bind tap 区别 
 bindtap 向外冒泡
 catch:tap 不会