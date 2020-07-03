// using a do while loop
let userInput;
do {
    userInput = prompt("Enter a number greater than 0 and less than 100");
} while((userInput <= 0) || (userInput >= 100));
alert("You entered "+ userInput*userInput);

// using a while loop

// let userInput = prompt("Enter a number greater than 0 and less than 100");
// while((userInput <= 0) || (userInput >= 100)) {
//     userInput = prompt("Enter a number greater than 0 and less than 100");
// }
// alert("You entered "+ userInput*userInput);


// I personally like do while loop for this case better since I can read the code from top to bottom and without repeat myself.