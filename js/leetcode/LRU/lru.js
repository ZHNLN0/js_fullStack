//不用每次都去硬盘内查找，在内存中，缓存是一个很重要的概念
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.obj = {};//对象 key的设计方案 便于查找
  this.arr = [];//数组
}

// 先设计两个方法 用jsonObject对象字面量 来实现 get set
LRUCache.prototype.get = function (key) {
  // 使用伪代码 假设key只存正值
  // 有返回值 设置为最近使用 
  // 没有 返回-1
  // 以最小的空间换来最有效的空间存储，容量不大的内存服务于最多的进程
  var val = this.obj[key];
  if (val>0){
    var index = this.arr.indexOf(key);
    this.arr.splice(index,1);
    this.arr.unshift(key);
  }else{
    return -1;
  }
}
LRUCache.prototype.set = function (key, value) {
  if (this.obj[key]) {
    this.obj[key] = value;//之前已经有了，现在进来属于更新 最近使用 放置在数组最前面 下标为0
    //操作数组
    var index = this.arr.indexOf(key);//根据值，通过indexOf得到位置 key 值？
    this.arr.splice(index, 1);//用splice方法根据下标删除
    this.arr.unshift(key);//将此项用unshift操作放置于数组最前面
  }
  // 如有有key就返回，没有的话有两种可能
  // 如果内存满了，arr.pop()从数组弹出去 维持了数组长度的不变
  // 没满 直接unshift存进第0位 
  if (this.capacity === this.arr.length) {//放满了
    var k = this.arr.pop();//最近最少使用
    this.obj[k] = undefined;//找不到
  }
  this.obj[key] = value;
  this.arr.unshift(key);
}
