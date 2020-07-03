var fibonacci = [0, 1];
for(let x = 0; x < 58; x++) {
    fibonacci.push(fibonacci[x] + fibonacci[x+1]);
}
console.log("f(0) to f(59)");
console.log(fibonacci);

// function fibonacci(n) {
//     if(n == 0) {
//         return 0;
//     }
//     if(n == 1) {
//         return 1;
//     }
//     else {
//         fibonacci(n) = fibonacci(n-1) + fibonacci(n-2);
//     }
// }

// for(let x = 0; x < 59; x++) {
//     console.log(fibonacci(x));
// }