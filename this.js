{
//    this关键字是一个非常重要的语法点。毫不夸张地说，不理解它的含义，大部分开发任务都无法完成。
//
// 前一章已经提到，this可以用在构造函数之中，表示实例对象。除此之外，this还可以用在别的场合。但不管是什么场合，this都有一个共同点：它总是返回一个对象。
//
// 简单说，this就是属性或方法“当前”所在的对象。


    // 箭头函数内部的this 总指向定义时的对象，普通函数指向运行时的对象

}

{

    // A.describe() 就是实例去调用   A.describe 就是定位到这个方法
    let A = {
        name: '张三',
        describe: function () {
            return '姓名：'+ this.name;
        }
    };



    B = A.describe
    A.describe = function () {
        return this
    }
    console.log(B())
    console.log(A.describe())
}




{

// <input type="text" name="age" size=3 onChange="validate(this, 18, 99);">
    // 此时this 就是文本框   this.value就能拿到值
}

//////////////实质////////
// this就出现了，它的设计目的就是在函数体内部，指代函数当前的运行环境。


{
    // JavaScript 允许在函数体内部，引用当前环境的其他变量。
    //    上面代码中，函数体里面使用了变量x。该变量由运行环境提供。
    //
    // 现在问题就来了，由于函数可以在不同的运行环境执行，所以需要有一种机制，能够在函数体内部获得当前的运行环境（context）。所以，this就出现了，它的设计目的就是在函数体内部，指代函数当前的运行环境。

    //全局环境
    //全局环境使用this，它指的就是顶层对象window。
    this === window // true

    function f() {
        console.log(this === window);
    }
    f() // true

    //构造函数
    //构造函数中的this，指的是实例对象。

    // 如果this所在的方法不在对象的第一层，这时this只是指向当前一层的对象，而不会继承更上面的层。
    let a = {
        p: 'Hello',
        b: {
            m: function() {
                console.log(this.p);
            }
        }
    };

    a.b.m() // undefined

// 把方法直接赋值给变量， this 会指向全局对象
    // 方法内嵌套函数， 内函数的this 指向 window  一般使用变量传递外层this 解决
}

{
    // 绑定this 方法
    // call
    let obj = {}
    let f = function () {
        return this
    }
    f() === window // true
    f.call(obj) === obj // true

    // bind
    let d = new Date();
    d.getTime() // 1481869925657

    let print = d.getTime.bind(d); // bind（d） 之后  this 还是指向d
    print() //1481869925657

}


{
    // function f1(f) {
    //     return function f2() {
    //         console.log(111)
    //         f()
    //     }
    // }
    //
    //
    // @f1()
}
