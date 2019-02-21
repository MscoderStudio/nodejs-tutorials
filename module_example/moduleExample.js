//使用exports
const tmpData = "+私有变量+";

exports.testa = r => console.log("testA执行" + tmpData + r);

exports.testb = r => console.log("testB执行" + tmpData + r);
