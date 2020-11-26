// 所谓Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。
//从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理。

const promise = new Promise(function (resolve,reject) {
    setTimeout(resolve,100,new Error("dsdsds"))
})

// .then会被放到后台， resolve执行则执行 a函数   reject执行 则执行b函数
promise.then((a => {
    console.log("a执行了")
    console.log(a)
}),b => {
    console.log("b执行了")
    console.log(b)
})
console.log(44444)
setTimeout(()=>{console.log("aaa")},1000)

// .catch   resolve状态会调用then里的函数 ， reject状态会调用catch里的函数， then 里有错误也会调用catch
promise.then(function(posts) {
    // ...
}).catch(function(error) {
    // 处理 getJSON 和 前一个回调函数运行时发生的错误
    console.log('发生错误！', error);
});

// finally， 一定会执行一次的方法
promise
    .then(result => {})
    .catch(error => {})
    .finally(() => {});
