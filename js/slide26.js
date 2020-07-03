let arrayFib = new Array(60);
arrayFib[0] = 0;
arrayFib[1] = 1;
console.log("First element: " + arrayFib[0]);
console.log("Second element: " + arrayFib[1]);
for(let i = 2; i < arrayFib.length; i++) {
    arrayFib[i] = arrayFib[i -1] + arrayFib[i - 2];
    console.log(i + "th element: " + arrayFib[i]);
}

