//ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。
const s = new Set();

[2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));

for (let i of s) {
    console.log(i);
}

// set 可以用来做 arr的去重



// weakset成员只能是对象
const a = [[1, 2], [3, 4]];
const ws = new WeakSet(a);



// map  为了解决 object 的键只能是字符串的问题
const m = new Map();
const o = {p: 'Hello World'};

m.set(o, 'content')
m.get(o) // "content"
