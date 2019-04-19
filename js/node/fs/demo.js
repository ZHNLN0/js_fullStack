// fs 模块 是 node 后端开发的一部分
const fs = require('fs');
// // 读文件是异步的，使用回调函数
// fs.readFile('./a.txt','utf-8',function(err,data){
//     console.log(data);
// })
// fs.readFile('./b.txt','utf-8',function(err,data){
//     console.log('-------------------------------------',data);
// })

// 将callback处理异步的方案抛弃
const fileAPromise = new Promise((resolve,reject) => {
    
    // 花时间的语言 耗时任务

    fs.readFile('./a.txt','utf-8',(err,data) => {
        // 流程的控制权怎么移交
        resolve(data);
    })
})
const fileBPrimise = new Promise((resolve,reject) => {
    fs.readFile('./b.txt','utf-8',(err,data) => {
        if(err){
            reject(err);
        }else{
            resolve(data);
        }
    })
})
// 将内部的耗时任务运行起来
fileAPromise
    .then(data => {
        console.log(data);
        return fileBPrimise;
    })
    .then(data => {
        console.log(data);
    })