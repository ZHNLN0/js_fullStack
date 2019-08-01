8. 下面代码的输出是什么?
class Chameleon {
  static colorChange(newColor) {
    this.newColor = newColor;
  }

  constructor({ newColor = "green" } = {}) {
    this.newColor = newColor;
  }
}

const freddie = new Chameleon({ newColor: "purple" });
freddie.colorChange("orange");
复制代码
A: orange
B: purple
C: green
D: TypeError

答案

答案: D
colorChange方法是静态的。 静态方法仅在创建它们的构造函数中存在，并且不能传递给任何子级。 由于freddie是一个子级对象，函数不会传递，所以在freddie实例上不存在freddie方法：抛出TypeError。

作者：ConardLi
链接：https://juejin.im/post/5d0644976fb9a07ed064b0ca
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。