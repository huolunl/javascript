var err = new Error('出错了')
console.log(err.message) // 出错了

// throw 123 遇到throw 程序就会终止， throw 可以抛出任何类型


try {
    throw new Error('出错了!');
} catch (e) {
    console.log(e.name + ": " + e.message);
    console.log(e.stack);
} finally {
    console.log('一定会执行')
}


