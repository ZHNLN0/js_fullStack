const fs = require('fs');
const util = require('util');
// const foo = () => {}
// foo        函数体
// foo()      执行了函数

// 1 输入一个函数
const promisify = (func) => {
  // args promisify 返回函数的参数
  // 第一个 ...args 将传入的参数整理为数组
  // 第二个 ...args 将上一个的数组的每一项一次展开
  return (...args) => {
    return new Promise((resolve, reject) => {
      func(...args, (err, data) => {
        if(err) reject(err)
        resolve(data);
      })
    })
  }
}
console.log(typeof fs.readFile);   //输出的时function
// 
const readFile = promisify(fs.readFile);
readFile('./index.html', {encoding: 'utf8'}).then(res => {
  console.log(res);
})


// fs.readFile('./index.html', {encoding: 'utf8'},(err, data) => {
//   if(!err) {
//     console.log(data);
//   }
// });
// fs.stat('.', (err, stats) => {
//   if(!err) {
//     console.log(stats);
//   }
// })