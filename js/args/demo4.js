const err = (message) => {
  throw new Error(message)
}

function sun(num = err('first param is not defined'), otherNum = err('second param is not defined')) {
  
  return num + otherNum;
}


console.log(sun(1, 2))  //3
console.log(sun(undefined, 2)); //报错，第一个参数没有定义
console.log(sun(10)) //报错，第二个参数没有定义
