import md5 from './md5.min.js'

const appid = '' //注册百度翻译api
const key = '' //注册百度翻译api

function translate(q, { from = 'auto', to = 'auto' } = { from: 'auto', to: 'auto' }) {
    //表示默认传递参数传递的值
    return new Promise((resolve, reject) => {
        let salt = Date.now() //随机数
        let sign = md5(`${appid}${q}${salt}${key}`) //拼接 MD5进行加密
        wx.request({
            url: 'https://fanyi-api.baidu.com/api/trans/vip/translate',
            data: {
                q, //待翻译文本
                from, //待翻译的原始语言
                to, //待翻译成的目标语言
                appid,
                salt, //随机数
                sign //拼接 MD5进行加密
            },
            success(res) {
                if (res.data && res.data.trans_result) {
                    resolve(res.data)
                } else {
                    reject({ status: 'error', msg: '翻译失败' })
                    wx.showToast({
                        title: '翻译失败',
                        icon: 'none',
                        duration: 3000
                    })
                }
            },
            fail() {
                reject({ status: 'error', msg: '翻译失败' })
                wx.showToast({
                    title: '网络异常',
                    icon: 'none',
                    duration: 3000
                })
            }
        })
    })
}

function getPicBase64(tempFilePath) {
    return new Promise(function(resolve, reject) {
        wx.getFileSystemManager().readFile({
            filePath: tempFilePath,
            encoding: "base64",
            success: function(data) {
                console.log(data); //返回base64编码结果，但是图片的话没有data:image/png
                resolve(data);
            }
        })
    })
}

function getPicToWord(src) {
    return new Promise(function(resole, reject) {
        wx.request({
            url: '',
            data: {
                pic: src,
                type: "cnen"
            },
            success: function(res) {
                console.log(res);
                resole(res);
            },
            fail: function(res) {
                console.log(res);
                reject(res);
            }
        })
    })
}

module.exports = {
    translate: translate,
    getPicBase64: getPicBase64,
    getPicToWord: getPicToWord
}