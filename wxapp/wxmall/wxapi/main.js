// API 模块
const API_BASE_URL = 'http://api.it120.cc';
const CONFIG = require('./config.js')
const request = (url, needSubDomain,method,data) => {
  return new Promise((resolve,reject) => {
    let _url = API_BASE_URL + (needSubDomain? '/' + CONFIG.subDomain:'') + url;
    wx.request({
      url: _url,
      method: method,
      data: data,
      header: {
        'Content-Type': 'application/x-www-form-urllencoded'
      },
      success(request) {
        resolve(request.data)
      },
      fail(error) {
        reject(error)
      }
    })
  });
}
module.exports = {
  loadGoods: (data) => {
    return request('/shop/goods/list', true,'post', data)
  },
  getBanners: (data) => {
    return request('/banner/list', true, 'get', data);
  },
  getCategory: () => {}
}