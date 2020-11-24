{
    let [foo, [[bar], baz]] = [1, [[2], 3]];
    console.log(foo) //1
    console.log(bar) //2
    console.log(baz)  //3
}

{
    // 可以使用默认值
    let [x, y = 'b'] = ['a']; // x='a', y='b'
    console.log(x) //a
    console.log(y) //b
}

{
    // 对象的解构赋值
    let { foo, bar } = { foo: 'aaa', bar: 'bbb' };
    let {x, y = 5} = {x: 1}; //x1 y 5

    //如果变量名与属性名不一致，必须写成下面这样。
    let { foo: baz } = { foo: 'aaa', bar: 'bbb' };
    baz // "aaa"
}

{
    // 字符串的解构
    const [a, b, c, d, e] = 'hello';

}

{
    // 函数的参数
    function add([x, y]){
        return x + y;
    }

    add([1, 2]);
}


{
    // 用途
    let x = 1;
    let y = 2;
    [x, y] = [y, x];

    function example() {
        return [1, 2, 3];
    }
    let [a, b, c] = example();

    let my_map = new Map()
//    遍历map
    for (let [key, value] of my_map) {
        console.log(key + " is " + value);
    }

    // 获取键名
    for (let [key] of my_map) {
        // ...
    }

    // 获取键值
    for (let [,value] of my_map) {
        // ...
    }
}
