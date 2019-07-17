const BASE_URL = "http://v.juhe.cn/movie"  
const res = (url, method, data) => {
  return new Promise((resolve, reject) => {
    let _url = BASE_URL + '/' + url
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
    });
  })

}
module.exports = {
  loadIndex: (data) => {
    return res('citys?key=5d4ddcaea7adad60fb9e45681514f87e','get', data)
  },
  // loadCategory: (data) => {
  //   return res('category', 'get', data)
  // },
  // loadProducts: (data) => {
  //   return res('products', 'get', data)
  // },
  // loadDetail: (data) => {
  //   return res('detail/10000134', 'get', data)
  // }
}