var number;
number = prompt("Please enter an integer: ");
while(number <= 0 || number >= 100){
    number = prompt("Please re-enter: ");
}
var squared = number * number;
console.log("Number squared is: " + squared);
