## 界面大框架及经验

水平方向禁止滚动条，垂直方向出现滚动条
- 水平和垂直两个方向都滚动，页面摇晃，容易误操作
- 垂直方向一直滚动是开发的主要方式 

- margin:0 auto; max-width:960px;
- flex 布局
  flex-grow 放大  flex-basis   flex-shrink 缩小  flex-wrap
  当网页由PC到mobile时，缩小阵仗

经验 简单适配PC -> mobile 照顾所有的用户 PC端 大手大脚一点， max-width margin: aotu padding margin 
    mobile flex-shrink 让关键部分坚挺一点