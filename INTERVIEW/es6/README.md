对es6的理解

es6 相对于 es5 ECMAScript 的第六次修订 ES2015 随着babel webpack构建工具的成熟，es6已成为js 编程的事实标准

es6 比 es5 更加简洁， 提高了开发效率，让 js 代码更优雅

- 新增的特性
  let变量声明 const变量声明， 具有 var 没有的块级作用域，比如循环事件监听时闭包就不需要了，让代码更好理解
  var 有变量提升的能力，let const 不会到顶级对象，使用的变量或常量要声明
- 箭头函数
  简化了函数的表达形式 
  1. 不用 function 关键字 () => {}
  2. 如果只有一个参数，() 也可以省
  3. 如果代码直接返回，{} 也可以省
  4. 有效的规避了this丢失的问题 指向上一级

- 模板字符串
  增强版的字符串，用 `` ， 他的多行表达方法，特别适合REACT JSX template 的书写
  DOM 或 html 模板的构建 更加优雅

- 解构赋值
  可解，可合，reset 从对象或数组中提取值， 对变量进行赋值，提高开发效率

- for of 循环
  for 计步，数组友好，但是 对象， Set Map 类数组 以及字符串都可以遍历

- SET es6 新增的数据解构，类似数组。唯一的，没有重复的值

- import export es6的模块化， es6原生支持的module, 将js代码分割成不同的小块独立开发，一个文件一个类，一个独立的米快，比如说 utils api

- ...展开运算符

- 终于支持原生的class 关键字了，js 有了传统面向对象的写法， extends 不过只是语法糖，底层还是基于原型的面向对象

- promise 为 js 提供了异步解决方案， 规避了回调地狱

- es7 async await
  koa 就是基于 asunc await 快速取代了express

- vue react 响应式编程依赖的proxy defineProperty 监听对象的改变，做一些事情

- es6 提供了新的数据类型，Symbol