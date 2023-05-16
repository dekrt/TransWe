import md5 from './md5.min.js'

const appid = '20230428001660105' //注册百度翻译api
const key = 'cVKXtU5tdGp8YDBPghkX' //注册百度翻译api

function translate(q, { from = 'auto', to = 'auto' } = { from: 'auto', to: 'auto' }) {
    // { from = 'auto', to = 'auto' } = { from: 'auto', to: 'auto' } 表示默认传递参数传递的值
    //Promise 对象
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
module.exports.translate = translate