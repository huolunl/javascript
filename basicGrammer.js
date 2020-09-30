// 语句:是为了完成某种任务而进行的操作，比如下面就是一行赋值语句。
// var a= 1+3


// 变量//
// var a = 1 相当于 var a; a=1 , 如果只是声明变量而没有赋值，则该变量的值是undefined。undefined是一个特殊的值，表示“无定义”。
//可以在同一条var命令中声明多个变量。
var a,b;
//果使用var重新声明一个已经存在的变量，是无效的。但是，如果第二次声明的时候还进行了赋值，则会覆盖掉前面的值。
var x = 1;
var x; // 1
//
var x = 1;
var x = 2; // 2
// 变量提升 //
//JavaScript 引擎的工作方式是，先解析代码，获取所有被声明的变量，然后再一行一行地运行。这造成的结果，就是所有的变量的声明语句，都会被提升到代码的头部，这就叫做变量提升（hoisting）
console.log(a); // undefined 变量a已经存在但是还未赋值
var a = 1;


// 标志符//
// 标识符（identifier）指的是用来识别各种值的合法名称。最常见的标识符就是变量名，以及后面要提到的函数名。JavaScript 语言的标识符对大小写敏感，所以a和A是两个不同的标识符。
// JavaScript 有一些保留字，不能用作标识符：arguments、break、case、catch、class、const、continue、debugger、default、delete、do、else、enum、eval、export、extends、false、finally、for、function、if、implements、import、in、instanceof、interface、let、new、null、package、private、protected、public、return、static、super、switch、this、throw、true、try、typeof、var、void、while、with、yield。


// 区块 //
// 区块对于var命令不构成单独的作用域，与不使用区块的情况没有任何区别。在 JavaScript 语言中，单独使用区块并不常见，区块往往用来构成其他更复杂的语法结构，比如for、if、while、function等。
{
    var a = 1;
}
// a // 1


// 条件语句 //
// if (布尔值)
//   语句;
//这种写法要求条件表达式后面只能有一个语句。如果想执行多个语句，必须在if的条件判断之后，加上大括号，表示代码块（多个语句合并成一个语句）。
// if (m === 0) {
//     // ...
//   } else if (m === 1) {
//     // ...
//   } else if (m === 2) {
//     // ...
//   } else {
//     // ...
//   }
// switch //
// switch (fruit) {
//     case "banana":
//       // ...
//       break;
//     case "apple":
//       // ...
//       break;
//     default:
//       // ...
//   }


// 三元运算符 //
//  (条件) ? 表达式1 : 表达式2
// var even = (n % 2 === 0) ? true : false;     为true 时 evne 的值是第一个表达式...


// 循环 //
// while (条件) {
//     语句;
//   }

// do {
//      语句
//    } while (条件);

top:
  for (var i = 0; i < 3; i++){
    for (var j = 0; j < 3; j++){
      if (i === 1 && j === 1) break top;
      console.log('i=' + i + ', j=' + j);
    }
  }
  // break 直接跳出双层循环

  foo: {
    console.log(1);
    break foo; //跳出代码块
    console.log('本行不会输出');
  }
  console.log(2);