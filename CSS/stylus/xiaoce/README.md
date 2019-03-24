不再写CSS，写的是CSS的预编译语言stylus
stylus有以下能力：
快
一套语法，支持现代CSS开发，compile过程
stylus style.styl -o style.css          -o output 输出的
stylus -w style.styl -o style.css       -w watch 一直监听文件的修改，实时的生成CSS文件

1. 跟CSS的规则说拜拜 不需要 {} : ; 需要的是tab键
2. stylus 提供嵌套功能  可以帮我们补上前面的选择器   现在我们的CSS就模块化了 从此CSS就有编程的感觉了
3. &运算符 依然使用tab缩进，但是他与上一级同级，适合于同一个元素多个类名，.active 或者伪类，伪状态
4. 变量定义 将常用的，重复使用（CSS不是编程语言，表达性的） 在最上面统一定义后，可以修改一处，所有使用了此变量的地方都会跟着修改。 成为网站的风格。


CSS 语法
1. overflow:hidden 
2. flex alihn-items 搞定vertical-align 又是不好搞的情况 vertical-align 兄弟之间 img + 兄弟
3. text-randering:optimizeLegibility; 抗锯齿 高清手机上文字的边缘不出现锯齿
4. flex-shrink:0 flex-grow
5. 第几个元素的选择 :first-child :last-child :nth-child(2n) :nth-child(2n+1)
6. -apple-system