// 原生的模块
// 供其他模块使用 比如 http res 继承自 Event 

const Event = require('events');
const ev = new Event();

ev.on('open', () => {
  console.log('open 发生了');
})
function callBack(){
  console.log('第二个 回调');
}
ev.on('open', callBack);
// removeEventListener
ev.emit('open');
ev.removeListener('open',callBack);
ev.emit('open');

ev.once('one',(data)=>{
  console.log(data)
})
ev.emit('one','form emit data ');
ev.emit('one');