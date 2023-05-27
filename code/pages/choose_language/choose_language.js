const app = getApp()
const util = require('../../utils/util.js')

Page({
  data: {
    list_aPbtoDn5: [
      {
        "image":"https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/644bb0005a7e3f03102917b5/644bb06fb98f5d0011665f39/ac7f93cc16a6602c18750922cf92014c.png",
        "text": "中文",
        'chs': '中文',
        'lang': 'zh',
      },
      {
        "image":"https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/644bb0005a7e3f03102917b5/644bb06fb98f5d0011665f39/1117504288074e5a51c1cc92bf0eeadb.png",
        "text": "英语",
        'chs': '英文',
        'lang': 'en',
      },
      {
        "image":"https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/644bb0005a7e3f03102917b5/644bb06fb98f5d0011665f39/16826823185577922182.png",
        "text": "德语",
        'chs': '德语',
        'lang': 'de',
      },
      {
        "image":"https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/644bb0005a7e3f03102917b5/644bb06fb98f5d0011665f39/16826823185920520575.png",
        "text": "韩语",
        'chs': '韩语',
        'lang': 'kor',
      }
    ],
    selectedIndex1: null,
    selectedIndex2: null,
    isClicked1: false,
    isClicked2: false,
    langList: app.globalData.langList,
    curLang: {},  //存储当前语言
    targetLang: {},
  },

  onShareAppMessage() {
    return {};
  },
  handleTap1: function() {
    this.setData({
      isClicked1: false,
      isClicked2: false,
    });
  },
  handleTap2: function() {
    this.setData({
      isClicked2: true,
      isClicked1: true,
    });
  },
  handleTap: function(e) {
    let langObj = e.currentTarget.dataset
    var index = langObj.index;
    console.log("Clicked item index: ", index);
    if (!this.data.isClicked1) {
      this.setData({
        selectedIndex1: index
      });
    }else{
      this.setData({
        selectedIndex2: index,
        targetLang: langObj,
      });
      wx.setStorageSync('language', langObj)
      this.setData({ 'curLang': langObj })
      app.globalData.curLang = langObj
    }
    console.log("Selected item: ", this.data.curLang, this.data.targetLang);
    
    //逻辑
   
  },
  
  onShow: function () {
    this.setData({ curLang: app.globalData.curLang })
  },
});