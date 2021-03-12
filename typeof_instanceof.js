// 三种类型判断方法  typeof   instanceof  Object.prototype.toString


console.log(typeof x);// "undefined"
// Number 是一个强转函数
console.log(typeof Number("a")) // number
console.log(typeof Number(undefined)) // number
console.log(Number(undefined)) //NaN     NaN也是一个number
