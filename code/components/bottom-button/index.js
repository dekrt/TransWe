

import { language } from '../../utils/conf.js'

let buttons = []

// 按钮配置
language.forEach(item=>{
  buttons.push({
    buttonText: item.lang_name,
    lang: item.lang_content,
    lto: item.lang_to[0],
    msg: item.hold_talk,
    buttonType: 'normal',
  })
})

// 按钮对应图片
let buttonBackground = {
  zh_CN: {
    normal: '../../image/R.png',
    press: '../../image/R1.png',
    disabled: '../../R.png',
  },
  en_US: {
    normal: '../../image/button_en.png',
    press: '../../image/button_en_press.png',
    disabled: '../../image/button_en_disabled.png',
  }
}

Component({
  properties: {
    buttonDisabled: {
      type: Boolean,
      value: false,
      observer: function(newVal, oldVal){
        let buttonType = newVal ? 'disabled' : 'normal'
        this.changeButtonType(buttonType)

      }
    },
  },

  data: {
    buttons: buttons,
    buttonBackground: buttonBackground,
    currentButtonType: 'normal',

  },

  ready: function () {
    // console.log(this.data.buttonEvent,)
  },

  methods: {

    /**
     * 按下按钮开始录音
     */
    streamRecord(e) {
      if(this.data.buttonDisabled) {
        return
      }
      // 先清空背景音
      wx.stopBackgroundAudio()

      let currentButtonConf = e.currentTarget.dataset.conf

      this.changeButtonType('press', currentButtonConf.lang)

      this.triggerEvent('recordstart', {
        buttonItem: currentButtonConf
      })

    },

    /**
     * 松开按钮结束录音
     */
    endStreamRecord(e) {
      let currentButtonConf = e.currentTarget.dataset.conf
      console.log("currentButtonConf", currentButtonConf)

      this.triggerEvent('recordend', {
        buttonItem: currentButtonConf
      })
    },

    /**
     * 修改按钮样式
     */
    changeButtonType(buttonType, buttonLang) {

      let tmpButtons = this.data.buttons.slice(0)

      tmpButtons.forEach(button => {
        if(!buttonLang || buttonLang == button.lang) {
          button.buttonType = buttonType
        }
      })

      this.setData({
        buttons: tmpButtons
      })
    },
  }
});