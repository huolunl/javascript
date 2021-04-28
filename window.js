// #浏览器环境概述
// JavaScript 是浏览器的内置脚本语言。也就是说，浏览器内置了 JavaScript 引擎，并且提供各种接口，让 JavaScript 脚本可以控制浏览器的各种功能。一旦网页内嵌了 JavaScript 脚本，浏览器加载网页，就会去执行脚本，从而达到操作浏览器的目的，实现网页的各种动态效果。


// 嵌入方法
//<script>元素直接嵌入代码。
<script>
    var x = 1 + 5;
    console.log(x);
</script>
// <script>标签加载外部脚本
<script src="https://www.example.com/script.js"></script>

// 事件属性
<button id="myBtn" onClick="console.log(this.id)">点击</button>
// URL 协议
<a href="javascript:console.log('Hello')">点击</a>


// 工作原理
// 浏览器加载 JavaScript 脚本，主要通过<script>元素完成。正常的网页加载流程是这样的。
//
// 浏览器一边下载 HTML 网页，一边开始解析。也就是说，不等到下载完，就开始解析。
// 解析过程中，浏览器发现<script>元素，就暂停解析，把网页渲染的控制权转交给 JavaScript 引擎。
// 如果<script>元素引用了外部脚本，就下载该脚本再执行，否则就直接执行代码。
// JavaScript 引擎执行完毕，控制权交还渲染引擎，恢复往下解析 HTML 网页。



// window与document的区别
// window
// 1.window对象表示浏览器中打开的窗口。
// 2.window对象可以省略，如:
//     alert() 等价于 window.alert()
// document
// 1.document对象是window对象的一部分。如：
// document.body 等价于 window.document.body
// 2.浏览器的html文档成为document对象。


//window.open(), window.close()，window.stop()
//var popup = window.open('somefile.html');
// window.open(url, windowName, [windowFeatures])


window.localStorage
//一个可被用于访问当前源（ origin ）的本地存储空间的 Storage 对象。
//只读的localStorage 属性允许你访问一个Document 源（origin）的对象 Storage；存储的数据将保存在浏览器会话中。localStorage 类似 sessionStorage，但其区别在于：存储在 localStorage 的数据可以长期保留；而当页面会话结束——也就是说，当页面被关闭时，存储在 sessionStorage 的数据会被清除 。
//
// 应注意，无论数据存储在 localStorage 还是 sessionStorage ，它们都特定于页面的协议。
//
// 另外，localStorage 中的键值对总是以字符串的形式存储。 (需要注意, 和js对象相比, 键值对总是以字符串的形式存储意味着数值类型会自动转化为字符串类型).

ajax
// 同源政策规定，AJAX 请求只能发给同源的网址，否则就报错。
//
// 除了架设服务器代理（浏览器请求同源服务器，再由后者请求外部服务），有三种方法规避这个限制。
//JSONP  只能发get请求
// 第一步，网页添加一个<script>元素，向服务器请求一个脚本，这不受同源政策限制，可以跨域请求。
//
// <script src="http://api.foo.com?callback=bar"></script>
// 注意，请求的脚本网址有一个callback参数（?callback=bar），用来告诉服务器，客户端的回调函数名称（bar）。
//
// 第二步，服务器收到请求后，拼接一个字符串，将 JSON 数据放在函数名里面，作为字符串返回（bar({...})）。
//
// 第三步，客户端会将服务器返回的字符串，作为代码解析，因为浏览器认为，这是<script>标签请求的脚本内容。这时，客户端只要定义了bar()函数，就能在该函数体内，拿到服务器返回的 JSON 数据。
// WebSocket
//WebSocket 是一种通信协议，使用ws://（非加密）和wss://（加密）作为协议前缀。该协议不实行同源政策，只要服务器支持，就可以通过它进行跨源通信。
// 应用层 双通道
// CORS
// 简单请求， 浏览器直接带着 origin发送请求， 如果服务器允许了这个origin 则请求成功
// 非简单请求， 需要提前发送一次预检查请求

