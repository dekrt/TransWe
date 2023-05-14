// js 文件
const recorderManager = wx.getRecorderManager()
const CryptoJS = require('crypto-js');

const options = {
  duration: 10000,
  sampleRate: 16000,
  numberOfChannels: 1,
  encodeBitRate: 96000,
  format: 'pcm',  // 修改此处为 'pcm'
  frameSize: 1
}

Page({
  data: {
    translateText: ''
  },

  startRecording: function() {
    recorderManager.start(options);
    recorderManager.onStart(() => {
      console.log('recorder start')
    });
  },

  stopRecording: function() {
    recorderManager.stop();
    recorderManager.onStop((res) => {
      this.tempFilePath = res.tempFilePath;
      console.log('recorder stop', res);
      this.sendRequestToBaiduAPI(this.tempFilePath);
    });
  },

  sendRequestToBaiduAPI: function(filePath) {
    wx.getFileSystemManager().readFile({
      filePath: filePath,
      encoding: 'base64',
      success: res => {
        let base64 = res.data;
        let appid = '20230428001660105'; // 你的App ID
        let secret_key = 'cVKXtU5tdGp8YDBPghkX'; // 你的密钥
        let timestamp = Math.floor(Date.now() / 1000); // Unix时间戳
        let msg = appid + timestamp + base64;
        let sign = this._hmac_sha256(secret_key, msg); // 计算签名
        this._sendRequest(base64, appid, timestamp, sign);
      },
      fail: err => {
        console.log('readFile fail', err);
      }
    });
  },

  _hmac_sha256: function(secret_key, msg) {
    const hash = CryptoJS.HmacSHA256(msg, secret_key);
    const hashInBase64 = CryptoJS.enc.Base64.stringify(hash);
    return hashInBase64;
  },

  _sendRequest: function(base64, appid, timestamp, sign) {
    wx.request({
      url: 'https://fanyi-api.baidu.com/api/trans/v2/voicetrans',
      method: 'POST',
      header: {
        'Content-Type': 'application/json',
        'X-Appid': appid,
        'X-Timestamp': timestamp,
        'X-Sign': sign
      },
      data: {
        'from': 'zh',
        'to': 'en',
        'format': 'pcm',
        'voice': base64
      },
      success: res => {
        if (res.data.code === 0) {
          this.setData({
            translateText: res.data.data.target
          });
          console.log('Translation result:', res.data.data.target);
        } else {
          console.log('translation error：', res.data.msg,'code:',res.data.code);
        }
      },
      fail: err => {
        console.log('request fail', err);
      }
    });
  }
});
