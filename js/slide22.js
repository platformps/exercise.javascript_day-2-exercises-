let userInput;
do {
    userInput = prompt("Enter a number between 0 and 100");
    } while (userInput < 0 || userInput > 100);
do {
    alert("The userInput squared is " + (userInput * userInput));
    }
while (userInput > 0 || userInput < 100);