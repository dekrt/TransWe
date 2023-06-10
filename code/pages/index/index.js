// 引入翻译工具和全局应用实例
import { translate } from '../../utils/api.js'
const app = getApp()
const plugin = requirePlugin("WechatSI")

Page({
  data: {
    query: '', // 用户输入的查询文本
    hideClearIcon: false, // 控制清除图标的显示与隐藏
    result: [], // 翻译结果
    curLang: {}, // 当前选择的语言
    fromLang:{},  //存储当前源语言
    currentTranslateVoice: '', // 当前播放的语音路径
    currentsound: '', // 当前语音合成语言
    history: [] // 翻译历史记录
  },

  // 页面加载时的处理函数
  onLoad: function (options) {
    if (options.query) {
      this.setData({
        query: options.query,
        'hideClearIcon': false // 显示清除图标
      })
    }
  },

  // 页面显示时的处理函数
  onShow: function () {
    this.setData({
      history: wx.getStorageSync('history') // 从本地存储获取历史记录
    })
    if (this.data.curLang.lang !== app.globalData.curLang.lang) {
      this.setData({
        curLang: app.globalData.curLang
      })
      this.onConfirm() // 执行翻译
    }
    if (this.data.fromLang.lang !== app.globalData.fromLang.lang){
      this.setData({
        fromLang: app.globalData.fromLang
      })
      this.onConfirm() // 执行翻译
    }
  },

  // 处理用户输入的函数
  onInput: function (e) {
    this.setData({
      'query': e.detail.value,
      'hideClearIcon': this.data.query.length > 0 ? false : true // 根据输入内容是否为空来决定是否显示清除图标
    })
  },

  // 处理用户点击清除图标的函数
  onTapClose: function () {
    this.setData({
      query: '',
      hideClearIcon: true,
      result: '' // 清除翻译结果
    })
  },

  // 执行翻译的函数
  onConfirm: function () {
    if (!this.data.query) return // 如果查询文本为空，则不执行翻译
    translate(this.data.query, {
      from: this.data.fromLang.lang || 'auto',
      to: this.data.curLang.lang
    }).then(res => {
      this.setData({
        'result': res.trans_result
      })

      // 更新历史记录
      let history = wx.getStorageSync('history') || []
      history.unshift({
        query: this.data.query,
        result: res.trans_result[0].dst,
        from: res.from,
        to: res.to
      })
      history.length = history.length > 10 ? 10 : history.length
      wx.setStorageSync('history', history)
    })
  },

  // 复制输入文本的函数
  copyTextIN: function (e) {
    wx.setClipboardData({
      data: this.data.query,
      success: function (res) {
        wx.showToast({
          title: '复制成功',
        });
      }
    });
  },

  // 复制翻译结果的函数
  copyTextOUT: function (e) {
    wx.setClipboardData({
      data: this.data.result[0].dst,
      success: function (res) {
        wx.showToast({
          title: '复制成功',
        });
      }
     });
  },

  // 播放翻译语音的函数
  playTranslateVoice: function (e) {
    let componentId = e.currentTarget.dataset.id;
    this.setData({
      currentsound: wx.getStorageSync('currentsound') || 'en_US'
    })
    let lto = this.data.currentsound
    let content = (componentId === 'src') ? this.data.result[0].src : this.data.result[0].dst
    plugin.textToSpeech({
      lang: lto,
      content: content,
      success: resTrans => {
        if (resTrans.retcode == 0) {
          this.setData({
            currentTranslateVoice: resTrans.filename,
          })
          let play_path = this.data.currentTranslateVoice
          if (!play_path) {
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
      fail: function (resTrans) {
        console.warn("语音合成失败", resTrans)
      }
    })
  },

  // 跳转到历史记录页面的函数
  onTapItem: function (e) {
    wx.reLaunch({
      url: `/pages/history/history`
    })
  },
})