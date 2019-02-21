//导出一个类
module.exports = class classModule {
  constructor(para) {
    this.para = para;
  }

  test() {
    return this.para + 2;
  }
};
