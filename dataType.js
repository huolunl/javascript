// 类型清单//
// 数值（number）：整数和小数（比如1和3.14）
// 字符串（string）：文本（比如Hello World）。
// 布尔值（boolean）：表示真伪的两个特殊值，即true（真）和false（假）
// undefined：表示“未定义”或不存在，即由于目前没有定义，所以此处暂时没有任何值
// null：表示空值，即此处的值为空。
// 对象（object）：各种值组成的集合。
// 通常，数值、字符串、布尔值这三种类型，合称为原始类型（primitive type）的值，即它们是最基本的数据类型，不能再细分了。
// 对象则称为合成类型（complex type）的值，因为一个对象往往是多个原始类型的值的合成，可以看作是一个存放各种值的容器。
// 至于undefined和null，一般将它们看成两个特殊值。


// 确认值的类型 //
a = typeof 123  // 返回描述类型的字符串
console.log(a) // 'number'
// typeof可以用来检查一个没有声明的变量，而不报错。
typeof p // 'undefined'
typeof window // "object"
typeof {} // "object"
typeof [] // "object"
typeof null // "object"  null的类型是object，这是由于历史原因造成的。1995年的 JavaScript 语言第一版，只设计了五种数据类型（对象、整数、浮点数、字符串和布尔值），没考虑null，只把它当作object的一种特殊值。后来null独立出来，作为一种单独的数据类型，为了兼容以前的代码，typeof null返回object就没法改变了
var o = {};
var a = [];
o instanceof Array // false
a instanceof Array // true


// null 和 undefined
// 概述 null与undefined都可以表示“没有”，含义非常相似。将一个变量赋值为undefined或null，老实说，语法效果几乎没区别。
// 在if语句中，它们都会被自动转为false，相等运算符（==）甚至直接报告两者相等。
Number(null) // 0
5 + null // 5
Number(undefined) // NaN
5 + undefined // NaN
// undefined
// null
// false
// 0
// NaN  not a number    nan 的类型是number
// ""或''  除了这6个 其他都是true


// 数值//
// 1 === 1.0 // true， JavaScript 内部，所有数字都是以64位浮点数形式储存，即使整数也是如此。所以，1与1.0是相同的，是同一个数。
// 0.1 + 0.2 === 0.3
// false
// 0.3 / 0.1
// 2.9999999999999996
// (0.3 - 0.2) === (0.2 - 0.1)
// false
// 由于浮点数不是精确的值，所以涉及小数的比较和运算要特别小心。
console.log(0.1+0.2===0.3)
parseInt('123') // 123
parseInt('   81') // 81
parseInt(1.23) // 1
// 等同于
parseInt('1.23') // 1
parseInt('8a') // 8
parseInt('12**') // 12
parseInt('12.34') // 12
parseInt('15e2') // 15
parseInt('15px') // 15
// 上面代码中，parseInt的参数都是字符串，结果只返回字符串头部可以转为数字的部分。
parseInt('abc') // NaN
parseInt('.3') // NaN
parseInt('') // NaN
parseInt('+') // NaN
parseInt('+1') // 1
// 所以，parseInt的返回值只有两种可能，要么是一个十进制整数，要么是NaN。
// 如果字符串以0x或0X开头，parseInt会将其按照十六进制数解析。
parseInt('0x10') // 16
parseInt('1000', 2) // 8parseFloat('3.14') // 3.14
// 浮点数
parseFloat('3.14') // 3.14
//isNaN方法可以用来判断一个值是否为NaN。
isNaN('Hello') // true
// 相当于
isNaN(Number('Hello')) // true
isNaN([]) // false
isNaN([123]) // false
isNaN(['123']) // false


// 字符串 //
//字符串就是零个或多个排在一起的字符，放在单引号或双引号之中。

