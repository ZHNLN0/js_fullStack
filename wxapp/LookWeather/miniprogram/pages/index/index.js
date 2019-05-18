// 把全局的getApp()拿过来
const app = getApp()
// import 引用地址下封装并且export暴露出来的方法
import { addEmotion, geocoder, getWeather } from '../../lib/api'


Page({
  data: {
    backgroundImage: '../../images/cloud.jpg',
    backgroundColor: '#62aadc',
    address: '定位中..',
    lat: 40.056974,
    lon: 116.307689,
    paddingTop: 0,
    scale: 1
  },
  onLoad() {
    let self = this
    addEmotion('213423', 'sdsd'),
      wx.getSystemInfo({
        success: (result) => {
          // console.log(result)
          let width = result.windowWidth
          let scale = width / 375
          self.setData({
            width,
            scale,
            paddingTop: result.statusBarHeight + 12
          })
        },
        fail: () => { },
        complete: () => { }
      });
    this.getLocation()
  },
  getLocation() {
    wx.getLocation({
      type: 'gcj02',
      success: this.updateLocation,
      fail: (e) => {
        this.openLocation()
      }
    })
  },
  updateLocation(res) {
    let { latitude: lat, longitude: lon, name } = res
    let data = {
      lat, lon
    }
    if (name) {
      data.address = name
    }
    console.log(res)
    this.setData(data)
    this.getAddress(lat, lon, name)
  },
  openLocation() {
    wx.showToast({
      title: '检测到您未授权使用位置权限，请先开启',
      icon: 'none',//取消打勾图标,
      duration: 3000
    })
  },
  getAddress(lat, lon, name) {
    wx.showLoading({
      title: '定位中',
      mask: true
    })
    let fail = (e) => {
      this.setData({
        address: name || '南昌市'
      })
      wx.hideLoading()
    }
    geocoder(lat, lon, (res) => {
      wx.hideLoading()
      let result = (res.data || {}).result
      console.log(res)
      if (res.statusCode === 200 && result && result.address) {
        let { address, formatted_addresses, address_component } = result
        if (formatted_addresses && (formatted_addresses.recommend || formatted_addresses.rough)) {
          address = formatted_addresses.recommend || formatted_addresses.rough
        }
        let { province, city, district: country } = address_component
        this.setData({
          province, city, country, address: name || address
        })
      }
    }, fail)
  },
  goDiary(){
    wx.navigateTo({
      url: '../diray/diary',
      success:(result) => {},
      fail:() => {},
      complete: () => {}
    })
  }
})