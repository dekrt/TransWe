//index.js
//获取应用实例
import { translate } from '../../utils/api.js'
const app = getApp()
const plugin = requirePlugin("WechatSI")
Page({
  data: {
    query: '',   //输入文字
    hideClearIcon: false,   //close icon显现状态
    result: [],   //译文结果
    curLang: {} , //当前语言
    currentTranslateVoice: '',  // 当前播放语音路径
    currentsound:'', //当前语音合成语言
    history: []
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
    this.setData({ history: wx.getStorageSync('history') })
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
      console.log(res.from)
      this.setData({ 'result': res.trans_result })

      let history = wx.getStorageSync('history') || []
      history.unshift({ query: this.data.query, result: res.trans_result[0].dst, from: res.from, to: res.to })
      history.length = history.length > 10 ? 10 : history.length
      wx.setStorageSync('history', history)
    })
  },
 
  copyTextIN: function(e) {
    wx.setClipboardData({
      data: this.data.query,
      success: function(res) {
        wx.showToast({
          title: '复制成功',
        });
      }
    });
  },
  copyTextOUT: function(e) {
    wx.setClipboardData({
      data: this.data.result[0].dst,
      success: function(res) {
        wx.showToast({
          title: '复制成功',
        });
      }
    });
  },
  playTranslateVoice: function(e) {
    let componentId = e.currentTarget.dataset.id;
    console.log(componentId);
    this.setData({
      currentsound: wx.getStorageSync('currentsound') || 'en_US'
    })
    let lto = this.data.currentsound
    let content = (componentId === 'src') ? this.data.result[0].src : this.data.result[0].dst
    console.log("content",content)
    plugin.textToSpeech({
      lang: lto,
      content: content,
      success: resTrans => {
        if(resTrans.retcode == 0) {
          this.setData({
            currentTranslateVoice: resTrans.filename,
          })
          let play_path = this.data.currentTranslateVoice
          if(!play_path) {
            console.warn("no translate voice path")
            return
          }
          let audio = wx.createInnerAudioContext()
          audio.src = play_path // 设置音频的源
          audio.play() // 播放音频
          audio.onError((res) => {
            console.log(res.errMsg)
            console.log(res.errCode)
        })
          
        } else {
          console.warn("语音合成失败", resTrans)
        }
      },
      fail: function(resTrans) {
        console.warn("语音合成失败", resTrans)
      }
  })
     

    },
    onTapItem: function (e) {
    wx.reLaunch({
      url: `/pages/history/history`
    })
  },
})
