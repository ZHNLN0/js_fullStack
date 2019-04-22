蜗牛爱吃香蕉

N piles bananas 每 pile bananas 有不同数量的bananas

[3,6,7,11]
[30,11,23,4,20]
每个小时可以吃某一pile里的n 只香蕉，规定H小时内吃完 吃没把的时候，要不就是吃 m 只，要不就吃余下的

koko bananas
- 把香蕉吃完的函数 canEatAllBanans
    h 来自吃法规则 一小时mid 一次只吃一把 
    return h >= H 

- while 去疯狂的试
    1，2，3，4，5，6，。。。。 Math.max(...piles)
    能拿到结果，就是太慢了
    中间 最大概率最快的 二分查找
    二分查找优化查找的效率

    简单查找 时间开销是n 二分查找的写法是有规律的
    min max 要找的是最小可以min 可以来优化的
    找中间 mid = min + ((max-min) >> 1) , 
    小了 mid +1 新的min  大了 mid-1 新的y
    log2(N) 