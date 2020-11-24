//ES5 的对象属性名都是字符串，这容易造成属性名的冲突。比如
//，你使用了一个他人提供的对象，但又想为这个对象添加新的方法（mixin 模式），
//新方法的名字就有可能与现有方法产生冲突。如果有一种机制，保证每个属性的名字都是独一无二的就好了，
//这样就从根本上防止属性名的冲突。这就是 ES6 引入Symbol的原因
{
    function Foo(name) {
        this.name = name
    }
    Foo.prototype.say = function() {
        return this.name
    }
    var f = new Foo('f')
    var say = Symbol('say')
    f[say] = function() {
        return 'other name'
    }
    f.say() // 'f'
    f[say]() // other name'

}
