- css 命名词汇
 feeds *-item
 - html结构及布局
  从上到下，从左到右，语义化和功能化            
  1. 套路
    content>h3+p
  2. 盒子
  3. a 作为盒子，在移动端很正常。 display:block;
  4. 盒子模型
    文字line-height padding margin
  5. 文字阶段
    tmall 商铺信息是由商家填的，他的高度不被限制，
    display:-webkit-box; 新的盒子模型，像flex 来划分父元素的空间。
    overflow:hidden;
    -webkit-line-clamp 行数
    -webkit-box-orient:vertical;

  6. 浮动   float: left | right
    离开文档流
    在一个盒子里，将要浮动的元素写在最前面，左右布局，
    在flex 布局之前，我们一般借助于float 来布局 
    图片的宽高？ div padding-top: 自身的宽高来做比例100% 正方形
    自适应设备里合资的等比例设置 width 百分比 高度用  padding-top