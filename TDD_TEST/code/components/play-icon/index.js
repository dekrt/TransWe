
const loadingIcon = '../../image/loading.gif'

Component({

  properties: {
    playType: {
      type: String,
      value: 'wait',
      observer: function(newVal, oldVal){
        if(oldVal == 'loading' && newVal == 'playing') {

          let loadingTransitionTime = 1240;
          let nowTime = + new Date()
          let loadingStartTime = this.data.loadingStartTime
          let loadingTime = nowTime - loadingStartTime
          let loadingCount = parseInt(loadingTime / loadingTransitionTime); // 完整播放次数
          let timeLeft = loadingTransitionTime - loadingTime % loadingTransitionTime; // 剩余播放时间

          if(loadingCount > 0 && timeLeft > 1000) {
            this.setData({
              realPlayType: newVal,
              loadingImg: '',
            })
          } else {
            setTimeout( ()=>{
              this.setData({
                realPlayType: newVal,
              })
            }, timeLeft)
          }
        } else if (newVal == 'loading'){
          this.setData({
            loadingStartTime: + new Date(),
            realPlayType: newVal,
          })
        } else {
          this.setData({
            realPlayType: newVal,
          })
        }
      },
    }
  },

  data: {
    realPlayType: 'wait', // 真正wxml中使用的type变量
    loadingStartTime: 0,
  },

  ready: function () {

  },

  // 组件生命周期函数，在组件实例被从页面节点树移除时执行
  detached: function() {

  },

  methods: {



  }
});