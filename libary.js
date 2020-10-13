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
    var obj = new Object()
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
        var s = Object.prototype.toString.call(o);
        return s.match(/\[object (.*?)\]/)[1].toLowerCase();
    };
    // 自定义获取类型的方法
}

{
    // Object.prototype.hasOwnProperty方法接受一个字符串作为参数，返回一个布尔值，表示该实例对象自身是否具有该属性
    // Object.prototype.toLocaleString方法与toString的返回结果相同，也是返回一个值的字符串形式
}
