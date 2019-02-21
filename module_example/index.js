const classModule = require("./moduleClass");
const eventModule = require("./moduleEvent");

var tmpClass = new classModule(1);
console.log(tmpClass.test());

eventModule.on("ready", () => {
  console.log("ready事件触发了");
});
