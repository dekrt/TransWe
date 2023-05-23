


import { language } from '../../utils/conf.js'

const tips_language = language[0]

let modalItems = [
    {
      type: 'copySource',
      text: tips_language.copy_source_text
    },
    {
      type: 'delete',
      text: tips_language.delete_item
    },
    {
      type: 'copyTarget',
      text: tips_language.copy_target_text
    },
]

Component({
  properties: {

    item: {
      type: Object,
      value: {},
    },

    modalShow: {
      type: Boolean,
      value: true,
    },

    index: {
      type: Number,
    },

  },

  data: {
    // tips_language: language[0], // 目前只有中文

    modalItems: modalItems,
  },

  ready: function () {
  },

  methods: {


    deleteBubbleModal: function() {
      this.triggerEvent('modaldelete', {
        item: this.data.item,
        index: this.data.index,
      },{ bubbles: true, composed: true })
      this.leaveBubbleModal()
    },

    /**
     * 点击
     */
    itemTap: function(e) {
      let itemType = e.currentTarget.dataset.type

      let item = this.data.item

      switch(itemType) {
        case 'copySource':
          this.setClip(item.text)

          break;
        case 'copyTarget':
          this.setClip(item.translateText)

          break
        case 'delete':
          this.deleteBubbleModal()

          break
        default:
          break
      }
    },

    /**
     * 复制到剪贴板
     *
     * @param      {string}  text    需要复制到剪贴板的文字
     */
    setClip: function(text) {

      wx.setClipboardData({
        data: text,
        success:  (res) => {
          this.leaveBubbleModal()
          wx.showToast({
            title: "已复制到剪切板",
            icon: "success",
            duration: 1000,
            success: function (res) {
              console.log("show succ");
            },
            fail: function (res) {
              console.log(res);
            }
          });
        }
      })
    },

    leaveBubbleModal: function() {
      this.triggerEvent('modalleave', {
        modalShow: this.data.modalShow
      })
    },

  }
});