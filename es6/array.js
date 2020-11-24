
{
    // 扩展运算符， 拆包
    console.log(...[1, 2, 3]) // 1，2，3

    // 复制数组
    const a1 = [1, 2];
    // 写法一
    const a2 = [...a1];


    const arr1 = ['a', 'b'];
    const arr2 = ['c'];
    const arr3 = ['d', 'e'];

// ES5 的合并数组
    arr1.concat(arr2, arr3);
// [ 'a', 'b', 'c', 'd', 'e' ]

// ES6 的合并数组
    [...arr1, ...arr2, ...arr3]
// [ 'a', 'b', 'c', 'd', 'e' ]
    let hello = [...'hello']
// [ "h", "e", "l", "l", "o" ]
}

{

}
