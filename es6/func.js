{
//ES6 允许为函数的参数设置默认值，即直接写在参数定义的后面。
    function log(x, y = 'World') {
        console.log(x, y);
    }
    // 解构默认值与函数默认值都存在的情况下， 函数默认值生效
}


{
//    指定了默认值以后，函数的length属性，将返回没有指定默认值的参数个数。也就是说，指定了默认值后，length属性将失真。
}

{
    function add(...values) {
        let sum = 0;

        for (var val of values) {
            sum += val;
        }

        return sum;
    }
}

{
    // 函数的name
    let f = function () {};

// ES5
    f.name // ""

// ES6
    f.name // "f"
}

{
// （1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
//
// （2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
//
// （3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。
//
// （4）不可以使用yield命令，因此箭头函数不能用作 Generator 函数。
    function foo() {
        setTimeout(() => {
            console.log('id:', this.id);// id: 42

        }, 100);
    }

    var id = 21;

    foo.call({ id: 42 });
}
