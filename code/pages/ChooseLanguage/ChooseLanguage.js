
Page({
  data: {
    list_n11zgJQ7: [null, null],
    list_zVRepQ2F: [null, null, null, null],
    value:'',
  },

  onShareAppMessage() {
    return {};
  },
  
  onChange(e) {
    const { value, callback } = e.detail;

    callback({
      value: value + 1,
      cursor: 0
    })
  },

});