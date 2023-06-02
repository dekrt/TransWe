//app.js

const utils = require('./utils/util.js')

App({
  onLaunch: function () {
    // 展示本地存储能力
    this.globalData.curLang = wx.getStorageSync('curLang') || this.globalData.langList[0];
    wx.getStorage({
      key: 'history',
      success: (res) => {
        this.globalData.history = res.data
      },
      fail: (res) => {
        console.log("get storage failed")
        console.log(res)
        this.globalData.history = []
      }
    })
  },
  // 权限询问
  getRecordAuth: function () {
    wx.getSetting({
      success(res) {
        console.log("succ")
        console.log(res)
        if (!res.authSetting['scope.record']) {
          wx.authorize({
            scope: 'scope.record',
            success() {
              // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
              console.log("succ auth")
            },
            fail() {
              console.log("fail auth")
            }
          })
        } else {
          console.log("record has been authed")
        }
      },
      fail(res) {
        console.log("fail")
        console.log(res)
      }
    })
  },

  onHide: function () {
    wx.stopBackgroundAudio()
  },

  globalData: {
    history: [],
    curLang: {},
    buttons:[],
    picBase64: "",
    word: [],
    langList: [{
      'chs': '英文',
      "lang": 'en',
      "index": 0,
      "src":"https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/644bb0005a7e3f03102917b5/644bb06fb98f5d0011665f39/1117504288074e5a51c1cc92bf0eeadb.png"
    },
    {
      'chs': '中文',
      'lang': 'zh',
      "index": 1,
      "src":"https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/644bb0005a7e3f03102917b5/644bb06fb98f5d0011665f39/ac7f93cc16a6602c18750922cf92014c.png"
    },
    {
      'chs': '日语',
      'lang': 'jp',
      "index": 2
    },
    {
      'chs': '韩语',
      'lang': 'kor',
      "index": 3,
      "src":"https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/644bb0005a7e3f03102917b5/644bb06fb98f5d0011665f39/16826823185920520575.png"
    },
    {
      'chs': '法语',
      'lang': 'fra',
      "index": 4
    },
    {
      'chs': '德语',
      'lang': 'de',
      "index": 5,
      "src":"https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/644bb0005a7e3f03102917b5/644bb06fb98f5d0011665f39/16826823185577922182.png"
    },
    {
      'chs': '俄语',
      'lang': 'ru',
      "index": 6
    },
    {
      'chs': '泰语',
      'lang': 'th',
      "index": 7
    },
    {
      'chs': '西班牙语',
      'lang': 'spa',
      "index": 8
    },
    {
      'chs': '阿拉伯语',
      'lang': 'ara',
      "index": 9
    },
    {
      'chs': '意大利语',
      'lang': 'it',
      "index": 10
    },
    {
      'chs': '葡萄牙语',
      'lang': 'pt',
      "index": 11
    }
    ]
  }
})