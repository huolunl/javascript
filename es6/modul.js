// js golang python 都是值传递 传副本



// import
//import命令输入的变量都是只读的，因为它的本质是输入接口。也就是说，不允许在加载模块的脚本里面，改写接口, 这一点和python不一样, 和 golang 也不一样
{
    // import {a} from './xxx.js'
    //
    // a = {}; // Syntax Error : 'a' is read-only;
}
//注意，import命令具有提升效果，会提升到整个模块的头部，首先执行。这种行为的本质是，import命令是编译阶段执行的，在代码运行之前。


//除了指定加载某个输出值，还可以使用整体加载，即用星号（*）指定一个对象，所有输出值都加载在这个对象上面。

// export default  导出的  import 可以不写名字 直接倒入


// export * from 'circle';
//export { foo, bar } from 'my_module';
//
// // 可以简单理解为
// import { foo, bar } from 'my_module';
// export { foo, bar };

// 上面代码中，export和import语句可以结合在一起，写成一行。但需要注意的是，写成一行以后，foo和bar实际上并没有被导入当前模块，只是相当于对外转发了这两个接口，导致当前模块不能直接使用foo和bar。
