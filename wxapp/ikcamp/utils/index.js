import config from './config'
import * as Mock from './mock'

const DEFAULT_REQUEST_OPTIONS = {
    url: '',
    data: {},
    header: {
        "Content-Type": "application/json"
    },
    method: "GET",
    dataType: "json"
}

let util = {
    isDev: config.isDev,
    log(){
        this.isDev && console.log(...arguments)
    },
    alert(title = "提示", content = config.defaultAlertMessage){
        if('object' === typeof content){
            content = this.isDev && JSON.stringify(content) || config.defaultAlertMessage
        }
        wx.showModal({
            title: title,
            content: content
        })
    },
    getStorageData(key,cb) {
        let self = this
        wx.getStorage({
            key: key,
            success(res){
                cb && cb(res.data)
            },
            fail(err){
                let msg = ree.reeMsg || '';
                if(/getStorage/.test(msg)) {
                    self.setStorageData(key)
                }
            }
        })
    },
   setStorageData(key, value = '', cb){
       wx.setStorageData({
           key:key,
           data:value,
           success(){
               cb && cb();
           }
       })
   },
   request(opt) {
       let {url, data, header, method, dataType, mock = false} = opt;
       let self = this;
       return new Promise((resolve, reject) => {
           if(mock){
               let res = {
                   statusCode: 200,
                   data: Mock[url]
               }
               if(res && res.statusCode === 200 && res.data) {
                   resolve(res.data)
               }else {
                   self.alert('提示', res)
                   reject(res)
               }
           }else {
               wx.request({
                   url:url,
                   data:data,
                   header:header,
                   method:method,
                   dataType:dataType,
                   success:function(res) {
                       if(res && res.statusCode == 200 && res.data){
                           resolve(res.data)
                       }else {
                           self.alert('提示', res)
                           reject(res)
                       }
                   },
                   fail: function(err) {
                       self.log(err)
                       self.alert('提示', err)
                       reject(err)
                   }
               })
           }
       })
   }  
}

export default util

