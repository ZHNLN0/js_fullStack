LRU 缓存 最近最少使用原则
Least Recently Used
操作系统

node fs 硬盘，内存

内存有一定的大小，比较精贵
  硬盘用不完 

内存是代码的运行空间 空间有限 
  假如现在空间为2 存放变量 2个 
  第三个变量

  <!-- 1 put(1)
  2 put(2)
  3 放不下了 -->
  [] 数组 内存2就是 length 2
    原则：最近最少使用
  1 put(1,1)
  2 put(2,2)
  3 get(1) 从内存中取出值 返回1 1最近使用了 2最近最少使用
  4 put(3,3) 3进去了,2就要丢掉  
  5 get(2)拿不到
  6 put(4,4) 431 1丢掉
  假如内存是数组 怎么实现？
  7 get(1)拿不到 返回-1
  8 get(3) 3
  9 get(4) 4

- cache 内存 LRUCache 实现
  get
  put

- 对象字面量有利于get put方法的实现
- 最近最少使用，JSON搞不定
  数组可以，有头有尾有下标 [0] [length -1]
  在一头进行操作 需要操作的unshift添加至头部 越靠近头部的使用最频繁，越靠近尾部的越少使用
  一半的工作交给数组，一半的工作交给jsonObject对象字面量
  让它们成为LRUCache的两个属性

- get set arr + obj 组织在LRUCache
  indexOf pop unshift splice



