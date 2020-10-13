// 三种强制转换 //
Number()  // 可以将任意类型转化成数值
// 数值：转换后还是原来的值
Number(324) // 324
// 字符串：如果可以被解析为数值，则转换为相应的数值
Number('324') // 324
// 字符串：如果不可以被解析为数值，返回 NaN
Number('324abc') // NaN
// 空字符串转为0
Number('') // 0
// 布尔值：true 转成 1，false 转成 0
Number(true) // 1
Number(false) // 0
// undefined：转成 NaN
Number(undefined) // NaN
// null：转成0
Number(null) // 0

Number({a: 1}) // NaN
Number([1, 2, 3]) // NaN
Number([5]) // 5
String() //String函数可以将任意类型的值转化成字符串，转换规则如下。
String(123) // "123"
String('abc') // "abc"
String(true) // "true"
String(undefined) // "undefined"
String(null) // "null"
String({a: 1}) // "[object Object]"
String([1, 2, 3]) // "1,2,3"

Boolean() //Boolean()函数可以将任意类型的值转为布尔值。
//它的转换规则相对简单：除了以下五个值的转换结果为false，其他的值全部为true。
//undefined
//null
//0（包含-0和+0）
//NaN
//''（空字符串）

// 自动转换
//遇到以下三种情况时，JavaScript 会自动转换数据类型，即转换是自动完成的，用户不可见。
//JavaScript 遇到预期为布尔值的地方（比如if语句的条件部分），就会将非布尔值的参数自动转换为布尔值。系统内部会自动调用Boolean函数。





