['log', 'info', 'warn', 'error'].forEach(function(method) {
    console[method] = console[method].bind(
        console,
        new Date().toISOString()
    );
});

console.log("出错了！");
