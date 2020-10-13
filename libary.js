// JavaScript 的所有其他对象都继承自Object对象，即那些对象都是Object的实例。

{// 直接定义在object上的方法
// 动态的添加一个方法, 类方法
    Object.print = function (o) {
        console.log(o)
    }
// 动态的添加一个方法, 实例方法
    Object.prototype.print = function () {
        console.log('proto')
    }
    let o = new Object()
    o.print()
}
{
    // instanceof运算符用来验证，一个对象是否为指定的构造函数的实例
    // Object本身是一个函数，可以当作工具方法使用，将任意值转为对象。这个方法常用于保证某个值一定是对象。
    let o = new Object()
    console.log(o instanceof Object) // true
    let obj = Object(1);
    obj instanceof Object // true
    obj instanceof Number // true
}
{
    let obj = Object('foo');
    obj instanceof Object // true
    obj instanceof String // true
}
{
    let obj = Object(true);
    obj instanceof Object // true
    obj instanceof Boolean // true
// 判断一个变量是否为对象
    function isObject(value) {
        return value === Object(value);
    }
}
{
// Object 也可以作为构造函数
    let o1 = {a: 1};
    let o2 = new Object(o1);
    o1 === o2 // true
    let obj = new Object(123);
    obj instanceof Number // true
}

{
    let a = ['a','b','c']
    console.log(Object.keys(a)) // [ '0', '1', '2' ]
    console.log(Object.getOwnPropertyNames(a)) //[ '0', '1', '2', 'length' ]
}


// 实例方法
{
// Object.prototype.valueOf() # // 自动类型转换时会调用, 默认返回对象本身
    let obj = new Object()
    obj.valueOf = function () {
        return 2
    }
    console.log(1 + obj) //3
}
{
    //Object.prototype.toString()  类似python的 str方法
}


{
    // Object.prototype.toString.call(value)
    // 上面代码表示对value这个值调用Object.prototype.toString方法。
    let obj = {}
    console.log(Object.prototype.toString.call(obj)) // 相当于
    console.log(obj.toString())
    let type = function (o){
        let s = Object.prototype.toString.call(o);
        return s.match(/\[object (.*?)\]/)[1].toLowerCase();
    };
    // 自定义获取类型的方法
}

{
    // Object.prototype.hasOwnProperty方法接受一个字符串作为参数，返回一个布尔值，表示该实例对象自身是否具有该属性
    // Object.prototype.toLocaleString方法与toString的返回结果相同，也是返回一个值的字符串形式
}


{
    // 包装对象
    //对象是 JavaScript 语言最主要的数据类型，三种原始类型的值——数值、字符串、布尔值——在一定条件下，也会自动转为对象，也就是原始类型的“包装对象”（wrapper）。
    // 作为构造函数
    let v1 = new Number(123);
    let v2 = new String('abc');
    let v3 = new Boolean(true);

    typeof v1 // "object"
    typeof v2 // "object"
    typeof v3 // "object"

    v1 === 123 // false
    v2 === 'abc' // false
    v3 === true // false

    // 作为普通函数就不会转为对象了
    // 字符串转为数值
    Number('123') // 123

    // 数值转为字符串
    String(123) // "123"

    // 数值转为布尔值
    Boolean(123) // true

    //原始类型与实例对象的自动转换
    'abc'.length // 3, 先创建一个string对象， 在获取对象的length， 然后销毁对象

    // 自动转换生成的包装对象是只读的，无法修改。所以，字符串无法添加新属性。
    let s = 'Hello World';
    s.x = 123;
    s.x // undefined


    //自定义方法
    String.prototype.double = function () {
        return this.valueOf() + this.valueOf();
    };

    'abc'.double()
    // abcabc

    Number.prototype.double = function () {
        return this.valueOf() + this.valueOf();
    };

    (123).double() // 246
}


{
    // Boolean
    let b = new Boolean(true)
    typeof b // "object"
    console.log(b.valueOf() === true) //true

    console.log(Boolean(new Boolean(false))) // true, false的包装实例是对象， 所以这里也是true
}

{
    // Number
    //    Number对象是数值对应的包装对象，可以作为构造函数使用，也可以作为工具函数使用。

    //作为构造函数时，它用于生成值为数值的对象
}

{
    //String
    //String对象是 JavaScript 原生提供的三个包装对象之一，用来生成字符串对象。
    let s1 = 'abc';
    let s2 = new String('abc');

    typeof s1 // "string"
    typeof s2 // "object"

    s2.valueOf() // "abc"

    //字符串对象是一个类似数组的对象（很像数组，但不是数组）。
    new String('abc')
    // String {0: "a", 1: "b", 2: "c", length: 3}

    console.log(new String('abc')[1]) // "b"

    // 除了用作构造函数，String对象还可以当作工具方法使用，将任意类型的值转为字符串。
    String(true) // "true"
    String(5) // "5"

    // 静态方法 String.fromCharCode() unicode
    console.log(String.fromCharCode(100)) //"d"

    // 实例属性
    'abc'.length //3
    // 实例方法
    console.log('abc'.charAt(1)) //"b"
    'JavaScript'.slice(0, 4) // "Java"
    'JavaScript'.slice(-6) // "Script"
    'a|b|c'.split('|') // ["a", "b", "c"]
    'a|b|c'.split('') // ["a", "|", "b", "|", "c"]
    'a||c'.split('|') // ['a', '', 'c']
}

{
    // Math 类
    // Math.abs()：绝对值
    // Math.ceil()：向上取整
    // Math.floor()：向下取整
    // Math.max()：最大值
    // Math.min()：最小值
    // Math.pow()：幂运算
    // Math.sqrt()：平方根
    // Math.log()：自然对数
    // Math.exp()：e的指数
    // Math.round()：四舍五入
    // Math.random()：随机数
}

{
    console.log(Date()) //// "Tue Dec 01 2015 09:34:43 GMT+0800 (CST)" 返回一个当前时间的字符串

}

{
    // json
    // 规则
    //复合类型的值只能是数组或对象，不能是函数、正则表达式对象、日期对象。
    //
    // 原始类型的值只有四种：字符串、数值（必须以十进制表示）、布尔值和null（不能使用NaN, Infinity, -Infinity和undefined）。
    //
    // 字符串必须使用双引号表示，不能使用单引号。
    //
    // 对象的键名必须放在双引号里面。
    //
    // 数组或对象最后一个成员的后面，不能加逗号

    // 静态方法
    //JSON.stringify()方法用于将一个值转为 JSON 字符串。该字符串符合 JSON 格式，并且可以被JSON.parse()方法还原。
    console.log(JSON.stringify(1)) //1
    console.log(JSON.stringify('abc'))//"abc"
    console.log(JSON.stringify(true))//true
    console.log(JSON.stringify([])) //[]
    console.log(JSON.stringify({}))//{}
    JSON.stringify([1, "false", false])
// '[1,"false",false]'

    JSON.stringify({ name: "张三" })
// '{"name":"张三"}'
    //果对象的属性是undefined、函数或 XML 对象，该属性会被JSON.stringify()过滤。
    let obj = {
        a: undefined,
        b: function () {}
    };

    JSON.stringify(obj) // "{}"

    // JSON.stringify()方法还可以接受一个数组，作为第二个参数，指定参数对象的哪些属性需要转成字符串。
    let obj2 = {
        'prop1': 'value1',
        'prop2': 'value2',
        'prop3': 'value3'
    };

    let selectedProperties = ['prop1', 'prop2'];

    JSON.stringify(obj2, selectedProperties)
// "{"prop1":"value1","prop2":"value2"}

    //如果参数对象有自定义的toJSON()方法，那么JSON.stringify()会使用这个方法的返回值作为参数，而忽略原对象的其他属性。


    // JSON.parse()方法用于将 JSON 字符串转换成对应的值。
    JSON.parse('{}') // {}
    JSON.parse('true') // true
    JSON.parse('"foo"') // "foo"
    JSON.parse('[1, 5, "false"]') // [1, 5, "false"]
    JSON.parse('null') // null

    let o = JSON.parse('{"name": "张三"}');
    o.name // 张三
}
