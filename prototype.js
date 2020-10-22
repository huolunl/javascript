// 大部分面向对象的编程语言，都是通过“类”（class）实现对象的继承。
// 传统上，JavaScript 语言的继承不通过 class，而是通过“原型对象”（prototype）实现，本章介绍 JavaScript 的原型链继承。

{
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.color = 'white';

    let cat1 = new Animal('大毛');
    let cat2 = new Animal('二毛');

    console.log(cat1.color) // 'white'
    console.log(cat2.color) // 'white'
    cat1.color = 'yellow'
    Animal.prototype.color = 'black' // 只会影响对象没有的属性
    console.log(cat1.color) // 'yellow'
    console.log(cat2.color) // 'black'

}

{
    //    如果一层层地上溯，所有对象的原型最终都可以上溯到Object.prototype，即Object构造函数的prototype属性。也就是说，所有对象都继承了Object.prototype的属性。这就是所有对象都有valueOf和toString方法的原因，因为这是从Object.prototype继承的。
    //
    // 那么，Object.prototype对象有没有它的原型呢？回答是Object.prototype的原型是null。null没有任何属性和方法，也没有自己的原型。因此，原型链的尽头就是null。


}
