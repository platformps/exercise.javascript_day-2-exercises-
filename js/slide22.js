let inputNumber;
do {
  inputNumber = window.prompt("Enter an integer between 1-100: ");
} while (inputNumber < 0 || inputNumber > 100);

var sqr = inputNumber * inputNumber;
console.log("The square of " + inputNumber + " is:  " + sqr);
