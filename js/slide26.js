function fibonacciNumbers (f1, f2) {
    if (f1 == 0) {
        return 0
    }
    if (f2 == 1) {
        return 1;
    }
    return fibonacciNumbers( f1- 1) + fibonacciNumbers(f2 - 2);
}
for(var i = 0; i < 59; i++) {
    console.log(fibonacciNumbers(i));
}