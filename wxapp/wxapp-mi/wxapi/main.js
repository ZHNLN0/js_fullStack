const BASE_URL = "https://www.easy-mock.com/mock/5cd75ce0b05b3355ce10ea3d/wxapp-mi"
const request = (url, needSubDomain, method, data) => {
  return new Promise ((resolve, reject) => {
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
  loadSwip: (data) => {
    return request('index', true, 'get', data)
  },
  loadNavBar: (data) => {
    return request('index', true, 'get', data)
  },
  loadRecommend: (data) => {
    return request('index', true, 'get', data)
  },
  loadCategory: (data) => {
    return request('category', true, 'get', data)
  }
}