- 阮一峰的继承
    先继承构造函数的属性
    构造函数被new 的方式运行 this 指向实例对象
    子类要拿到父类构造函数属性，父类构造函数运行一下，call/apply 指定this为子类对象

- call/apply的区别
    手动指定函数内部this的指向
    参数用法不一样，偏向于用apply,[] arguments

- this 函数内部的this 
    有运行的方式决定，而非声称是决定
    1. 普通函数
    2. 对象的方法
    3. call apply 指定
    4. 构造函数
    5. 事件回调函数内部 this 会时事件发生的对象
    6. bind 指定this 返回新的函数，