// constructor方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法。一个类必须有constructor方法，如果没有显式定义，一个空的constructor方法会被默认添加

class Point {
}

// 等同于
class Point {
    constructor() {}
}


{
    class Point {
        // ...
    }

    // 报错
    let point = Point(2, 3);

    // 正确
    let point2 = new Point(2, 3);
}

{
    //定义类
    class Point {

        constructor(x, y) {
            this.x = x;
            this.y = y;
        }

        toString() {
            return '(' + this.x + ', ' + this.y + ')';
        }
    }

    // 方法是定义在圆形上的
}


{
    // 与 ES5 一样，在“类”的内部可以使用get和set关键字，对某个属性设置存值函数和取值函数，拦截该属性的存取行为。
    class MyClass {
        constructor() {
            // ...
        }
        get prop() {
            return 'getter';
        }
        set prop(value) {
            console.log('setter: '+value);
        }
    }

    let inst = new MyClass();

    inst.prop = 123;
    // setter: 123

        inst.prop
    // 'getter'

}

//由于本质上，ES6 的类只是 ES5 的构造函数的一层包装，所以函数的许多特性都被Class继承，包括name属性。




// 类相当于实例的原型，所有在类中定义的方法，都会被实例继承。如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。

{
    class Foo {
        static classMethod() {
            return 'hello';
        }
    }

    Foo.classMethod() // 'hello'

    var foo = new Foo();
    foo.classMethod()
// TypeError: foo.classMethod is not a function
}


//

{{
    // 这样定义也是实例属性
    class foo {
        bar = 'hello';
        baz = 'world';

        constructor() {
            // ...
        }
    }
}}


// 继承
class Point {
}

class ColorPoint extends Point {
}


class A {}

class B extends A {
    constructor() {
        super(); // 代表调用fulei 构造函数
    //    注意，super虽然代表了父类A的构造函数，但是返回的是子类B的实例，即super内部的this指的是B的实例，因此super()在这里相当于A.prototype.constructor.call(this)
    }
}

{
    class A {
    }

    class B extends A {
    }

    B.__proto__ === A // true
    B.prototype.__proto__ === A.prototype // true
}
