var api = require("../../utils/api.js");
const app = getApp();
Page({
  data: {

  },
  takeShot: function(){
    const ctx = wx.createCameraContext()
    ctx.takePhoto({
      quality: 'high',//一会上传图片进行文字提取的时候，图片转换base64之后，大小不能超300k,所以只能选择中画质
      success: (res) => {
        console.log("图片的临时地址为："+res.tempImagePath);
        api.getPicBase64(res.tempImagePath).then(function(res){
          app.globalData.picBase64=res.data;
          wx.navigateTo({
            url: '../OCR/OCR',
        })
        })
      }
    })
  },
  onTap: function(){
    wx.showToast({
      title: '只支持中译英',
      icon: "error"
    })
  }
})