// 引入全局的app实例
const app = getApp()

// 定义一个页面
Page({
  // 页面的初始数据
  data: {
    history: [] // 历史记录数组
  },

  // 页面显示时的回调函数
  onShow: function () {
    // 从本地存储中获取历史记录，并设置到页面数据中
    this.setData({
      history: wx.getStorageSync('history')
    })
  },

  // 点击历史记录项时的回调函数
  onTapItem: function (e) {
    // 重新加载首页，并传递点击的历史记录项的查询参数
    wx.reLaunch({
      url: `/pages/index/index?query=${e.currentTarget.dataset.query}`
    })
  },

  // 清除历史记录的回调函数
  onClearHistory: function () {
    // 将页面数据中的历史记录数组设置为空
    this.setData({
      history: []
    })

    // 清除本地存储中的历史记录
    wx.clearStorage('history')
  },
})
