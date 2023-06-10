// 导入翻译工具
import { translate } from '../../utils/api.js'

// 获取全局应用程序实例对象
const app = getApp();

// 定义页面
Page({
    /**
     * 页面的初始数据
     */
    data: {
        src: "", // 图片源
        sourceText: [], // 原始文本
        resultText: '', // 翻译结果
        imgList: [], // 图片列表
        filePath: '', // 文件路径
        picBase64: '', // 图片的base64编码
        textSrc: '', // 原文本
        textDst: '' // 目标文本
    },

    // 页面显示时的回调函数
    onShow: function() {
        // 如果全局变量中的图片base64编码不为空
        if (app.globalData.picBase64 != "") {
            // 更新数据
            this.setData({
                src: app.globalData.picBase64,
            })
        }
    },

    // 上传图片的函数
    uploadImg: function() {
        // 导航到获取图片的页面
        wx.navigateTo({
            url: '../getPic/getPic',
        })
    },

    // 获取OCR的函数
    getOCR: function() {
        // 提取图片里的文字
        var that = this;
        wx.request({
            //OCR的api接口请自行申请或替换！
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
                let str = that.data.sourceText.join()
                console.log(str)
                translate(str, {
                    from: 'zh',
                    to: 'en'
                }).then(res => {
                    console.log(res)
                    that.setData({
                        resultText: res.trans_result[0].dst
                    })
                })
            },
            fail: function(res) {
                console.log(res);
            }
        })
    },

    // 返回按钮的点击事件处理函数
    onBackIconTap: function() {
        // 导航回上一页
        wx.navigateBack({
            delta: 1, // 返回的页面层数
        });
    }
})