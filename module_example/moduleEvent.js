const EventEmitter = require("events");

module.exports = new EventEmitter();

//一秒后触发事件
setTimeout(() => {
  module.exports.emit("ready");
}, 1000);
