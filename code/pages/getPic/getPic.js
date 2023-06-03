// 引入api模块，该模块可能包含了一些工具函数
var api = require("../../utils/api.js");

// 获取全局的app实例
const app = getApp();

// 定义一个页面
Page({
  // 页面的初始数据
  data: {

  },

  // 定义一个方法，用于拍照
  takeShot: function () {
    // 创建一个摄像头的上下文
    const ctx = wx.createCameraContext()

    // 使用上下文来拍照
    ctx.takePhoto({
      // 设置图片质量为高
      quality: 'high', // 上传图片进行文字提取时，图片转换为base64后，大小不能超过300k，所以只能选择高画质

      // 拍照成功后的回调函数
      success: (res) => {
        // 打印图片的临时地址
        console.log("图片的临时地址为：" + res.tempImagePath);

        // 调用api模块的getPicBase64函数，将图片转换为base64格式
        api.getPicBase64(res.tempImagePath).then(function (res) {
          // 将转换后的base64图片保存到全局数据中
          app.globalData.picBase64 = res.data;

          // 导航到OCR页面
          wx.navigateTo({
            url: '../OCR/OCR',
          })
        })
      }
    })
  },

  // 定义一个方法，用于显示提示
  onTap: function () {
    // 显示一个只支持中译英的提示
    wx.showToast({
      title: '只支持中译英',
      icon: "error"
    })
  }
})
