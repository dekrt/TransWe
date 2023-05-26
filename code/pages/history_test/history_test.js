const app = getApp()

Page({
  data: {
    history: [],
    list_BiYy5U1W: [null, null],
    list_nnpIZ1wY: [null, null],
    list_xeS18m5q: [null, null],
    list_Ml983udZ: [null, null],
    list_WbpwHwPk: [null, null, null, null],
  },

  onShow: function () {
    this.setData({ history: wx.getStorageSync('history') })
  },

  onTapItem: function (e) {
    wx.reLaunch({
      url: `/pages/index/index?query=${e.currentTarget.dataset.query}`
    })
  },

  onClearHistory: function(){
    this.setData({history: []})  //将显示变为空
    wx.clearStorage('history')   //并清除Storage历史记录
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})