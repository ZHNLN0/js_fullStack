# 相对单位，为了自适应
    不同的移动设备
    750px

    vw vh 按比例分配宽高
    em 移动端少用px rem  细致的每个盒子或盒子模型的大小等
    em 是相对自身的字体大小来比例
    10em 10*14px = 140px
    rem html 根元素的fontsize
    :befor :after 伪元素 没有标签但却可以像真正的元素一样来在页面上占位置。
    dom  文档流里不需要写这个元素，副作用，不会影响到内容的显示。
    使用css来声明，content属性是必须的
    html 默认的字体大小是16px 如果没有设置，会使用父级，或body font-size