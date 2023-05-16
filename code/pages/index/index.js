//index.js
//获取应用实例
import { translate } from '../../utils/api.js'
const app = getApp()

Page({
  data: {
    query: '',   //输入文字
    hideClearIcon: true,   //close icon显现状态
    result: [],   //译文结果
    curLang: {}   //当前语言
  },
  onLoad: function (options) {  //翻译历史页通过 reLaunch 跳转，重新加载
    console.log('onload..')
    console.log(options)
    if (options.query) {
      this.setData({ query: options.query })
      this.setData({ 'hideClearIcon': false })   //让icon-close显现
    }
  }, 
  onShow: function () {
    if (this.data.curLang.lang !== app.globalData.curLang.lang) {
      this.setData({ curLang: app.globalData.curLang })
      this.onConfirm()
    }

  },
  onInput: function (e) {
    //传递用户输入的数据、close的展示跟隐藏
    this.setData({ 'query': e.detail.value })
    if (this.data.query.length > 0) {   //输入时字体图标出现
      this.setData({ 'hideClearIcon': false })
    } else {
      this.setData({ 'hideClearIcon': true })
    }

    console.log('focus')
  },
  onTapClose: function () {
    //用户点击close的事件
    this.setData({ query: '', hideClearIcon: true })
    //如果不需要保留译文结果，也可以删除
    this.setData({ result: '' }) 
    console.log('clearAll')
  },
  onConfirm: function () {
    //翻译
    if (!this.data.query) return  //空文本的时候不进行翻译
    translate(this.data.query, { from: 'auto', to: this.data.curLang.lang }).then(res => {
      //调用 api.js 里面的 Promise
      this.setData({ 'result': res.trans_result })

      let history = wx.getStorageSync('history') || []
      history.unshift({ query: this.data.query, result: res.trans_result[0].dst })
      history.length = history.length > 10 ? 10 : history.length
      wx.setStorageSync('history', history)
    })
  }
})
