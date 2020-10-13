{
    // 构造函数
    let Vehicle = function () {
        this.price = 1000;
    };
    //    构造函数的特点有两个。
    //
    // 函数体内部使用了this关键字，代表了所要生成的对象实例。
    // 生成对象的时候，必须使用new命令。
}

{
    // new 命令
    // new命令的作用，就是执行构造函数，返回一个实例对象。 实际上是获得构造函数的返回对象，默认返回this
    let Vehicle = function () {
        this.price = 1000;
    };

    let v = new Vehicle();
    console.log(v.price) //1000


    //一个很自然的问题是，如果忘了使用new命令，直接调用构造函数会发生什么事？
    let Vehicle1 = function (){
        this.price = 1000;
    };
    // 没有使用new  this 指向全局对象
    let v1 = Vehicle1();
    v1 // undefined
    price // 1000

    //另一方面，如果对普通函数（内部没有this关键字的函数）使用new命令，则会返回一个空对象。
}

{
    // Object.create() 创建实例对象
    let p1 = {
        name: '张三',
        age: 38
    }
    let p2 = p1
    let p3 = Object.create(p1)
    console.log(p1.age) //38
    console.log(p2.age) //38
    console.log(p3.age) //38
    p1.age = 99
    console.log(p1.age) //99
    console.log(p2.age) //99
    console.log(p3.age) //99
    // p1 p2 p3 指向同一个对象

}
