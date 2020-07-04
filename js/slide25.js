let Fibonacci = []; 
let i;

Fibonacci[0] = 0;
Fibonacci[1] = 1;

for (i = 2; i <= 10; i++) {
  Fibonacci[i] = Fibonacci[i - 2] + Fibonacci[i - 1];
}
console.log(Fibonacci);