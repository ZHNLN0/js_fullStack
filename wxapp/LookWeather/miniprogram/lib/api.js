const QQ_MAP_KEY = 'N43BZ-4TUWS-RLFOK-66DCY-LGPWF-OPFDU'

wx.cloud.init({
  env: 'zhn-wxapp-i44x0'
})

// 获取服务器句柄
const db = wx.cloud.database()

// 封装一个往服务器添加数据的 方法(添加心情)
// 提前写抛出
export const addEmotion = (openid, emotion) => {
  return db.collection('diary').add({
    data: {
      openid,
      emotion,
      teModified: Date.now()
    }
  })
}

// 获取位置
export const geocoder = (lat, lon, success = () => { }, fail = () => { }) => {
  return wx.request({
    url: 'https://apis.map.qq.com/ws/geocoder/v1/',
    data: {
      location: `${lat},${lon}`,
      key: QQ_MAP_KEY,
      get_poi: 0
    },
    success,
    fail
  })
}

// 获取天气
export const getWeather = (lat, lon) => {
  return wx.cloud.callFunction({
    name: 'he-weather',
    data: {
      lat,
      lon
    }
  })
}

// 往数据库里面查询到用户的openid和具体的时间段，然后获取信息
export const getEmotionByOpenidAndData = (openid, year, month) => {
  const _ = db.command
  year = passInt(year)
  month = passInt(month)
  let start = new Date(year, month - 1, 1).getTime()
  let end = new Date(year, month, 1).getTime()
  return db.collection('diary').where({
    openid,
    tsModified: _.get(start).and(_.lt(end))
  })
  .get()
}
export const jscode2session = (code) => {
  return wx.cloud.callFunction({
    name: 'jscode2sessio',
    data: {
      code
    }
  })
}