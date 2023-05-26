import { translate } from '../../utils/api.js'
const app = getApp();

Page({
    /**
     * 页面的初始数据
     */
    data: {
        src: "",
        sourceText: [],
        resultText: '',
        imgList: [],
        filePath: '',
        picBase64: '',
        textSrc: '',
        textDst: ''
    },
    onShow: function() {
        if (app.globalData.picBase64 != "") {
            this.setData({
                src: app.globalData.picBase64,
            })
        }
    },
    uploadImg: function() {
        let that = this;
        wx.navigateTo({
            url: '../getPic/getPic',
        })
    },
    getOCR: function() {
        //提出图片里的文字
        var that = this;
        wx.request({
            url: '',
            data: {
                pic: this.data.src,
                type: "cnen"
            },
            method: 'post',
            header: {
                'content-type': 'application/x-www-form-urlencoded' // 默认值
            },
            success: function(res) {
                console.log(res);
                that.setData({
                        sourceText: res.data.result
                    })
                    // app.globalData.word = res.data.result;
                let str = that.data.sourceText.join()
                console.log(str)
                translate(str, { from: 'zh', to: 'en' }).then(res => {
                    // let result_str = 
                    console.log(res)
                    that.setData({ resultText: res.trans_result[0].dst })
                })
            },
            fail: function(res) {
                console.log(res);
            }
        })
    },
})