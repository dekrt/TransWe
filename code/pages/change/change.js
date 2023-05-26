//logs.js

const util = require('../../utils/util.js')
const app = getApp()
Page({
  data: {
    curLang: {},
    langList: app.globalData.langList  //存储当前语言
  },
  onShow: function () {
    this.setData({ curLang: app.globalData.curLang })
  },
  onTapItem: function (e) {
    let langObj = e.currentTarget.dataset
    wx.setStorageSync('language', langObj)
    this.setData({ 'curLang': langObj })
    app.globalData.curLang = langObj
    wx.switchTab({ url: '/pages/index/index' })  //跳转页面
  }
})
