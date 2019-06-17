const Events = require('events');
const ev = new Events();
const request = require('./lib/request.js');
const Player = require('player')

// ev.on('search')
['search','choose'].forEach(evName => { //forEach 循环绑定
  const fn = require(`./lib/${evName}`)
  ev.on(evName, async function (...args) {
    const res = await fn(...args);
    ev.emit('handle', evName,res,...args)
    // console.log(res);
  })
})
ev.on('afterSearch', (res, keyWord) => {
  if (!res.result || !res.result.songs) {
    console.log(`没有搜到${keyWord}的信息`);
    return false;
  }
  const songs = res.result.songs;
  ev.emit('choose',songs);
})
ev.on('afterChoose', async (selected, songs) => {
  const selectSong = songs.find((song, i) => {
    return selected == `${i}${song.name}`
  })
  if(selectSong) {
    const {id} = selectSong;
    
    // 请求歌曲详情
    let url = 'http://neteasecloudmusicapi.zhaoboy.com/song/url?id=347230' + id;
    const songDetail = await request(url);
    const {url: songUrl} = songDetail.data[0];
    const Player = new player(songUrl);
    Player.player();
  }
})
ev.on('handle', (key, res, ...args) => {
  switch (key) {
    case 'search':
      return ev.emit('afterSearch', res, args[0])
    case 'choose':
      return ev.emit('afterChoose', res, args[0])
  }
})

function main() {
  // 在一个进程模块里面 process在node中是一个全局变量 截取这个数字组中的第三项 歌名
  const argv = process.argv.slice(2);
  let keyWord = argv[0];
  ev.emit('search', keyWord);
  // console.log(keyWord);
}

main();
