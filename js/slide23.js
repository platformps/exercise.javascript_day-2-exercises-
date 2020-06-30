var num1;
var num2;
//do {
    num1 = prompt("Enter the first of two numbers");
    num2 = prompt("Enter the second of the numbers");

    if (num1 > num2) {
        var L = num2;
        var U = num1;
        for (U = num1; U > L; U--) {
            console.log("number: " + U);
            document.write("--> " + U);
        }
    }
    if (num2 > num1) {
        var L = num1;
        var U = num2;
        for(L = num1; L < U; L++) {
            console.log("number: " + L);
            document.write("--> " + L);
        }
    }
    console.log("tadaaaa!");
    document.write("tadaaaa!");
//} while (2 == 2);
