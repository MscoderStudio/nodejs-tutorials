//https://course.mscoder.cn/nodejs/node-module/

const classModule = require("./moduleClass");
const eventModule = require("./moduleEvent");
const example = require("./moduleExample");

var tmpClass = new classModule(1);
console.log("classModule.test():" + tmpClass.test());

eventModule.on("ready", () => {
  console.log("ready事件触发了");
});

example.testa(1);
example.testb(2);
