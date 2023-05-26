Page({
  data: {
    list_aPbtoDn5: [
      {
        "image":"../../image/中文.png",
        "text": "中文"
      },
      {
        "image":"../../image/英语.png",
        "text": "英语"
      },
      {
        "image":"../../image/德语.png",
        "text": "德语"
      },
      {
        "image":"../../image/韩语.png",
        "text": "韩语"
      }
    ],
    selectedIndex1: null,
    selectedIndex2: null,
    isClicked1: false,
    isClicked2: false,
  },

  onShareAppMessage() {
    return {};
  },
  handleTap1: function() {
    this.setData({
      isClicked1: false,
      isClicked2: false,
    });
  },
  handleTap2: function() {
    this.setData({
      isClicked2: true,
      isClicked1: true,
    });
  },
  handleTap: function(e) {
    var index = e.currentTarget.dataset.index;
    console.log("Clicked item index: ", index);
    if (!this.data.isClicked1) {
      this.setData({
        selectedIndex1: index
      });
    }else{
      this.setData({
        selectedIndex2: index
      });
    }

    console.log("Selected item: ", this.data.selectedIndex1,this.data.selectedIndex2);
  },
  
});