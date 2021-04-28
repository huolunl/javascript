// 和python 用法一致的装饰器

@testable
class MyTestableClass {
    // ...
}

function testable(target) {
    target.isTestable = true;
}

MyTestableClass.isTestable // true
