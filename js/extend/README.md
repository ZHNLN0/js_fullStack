person 由 prototype 属性来解决他自身构造之外的原型上的属性或方法
原型对象会由它的构造函数 person.prototype.constructor属性
实例 跟 person 有什么关系，person.prototype 有关系

js 实力跟类其实不是 java 等语言的血缘关系
zs 实例是 new person() 得到的
1. person 函数运行 new 的方式， this=> new Object();
2. zs 怎么得到person.prototype原型对象上定义的方法 __proto__ 属性
3. 方法有prototype属性，值为对象 对象上就可以开支 
4. 任何对象都有 __proto__ 指向它的原型对象
5. 原型对象上 有 constrctor 属性指向它的构造函数

原型