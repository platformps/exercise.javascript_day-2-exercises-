let userInput = "";
let result = "";

do {
    userInput = prompt("Please enter the Integer less than 100");
    if (userInput < 100 && userInput > 0) {
        result = userInput * userInput;
        console.log("Number squared is:" + result);
        break;
    }

} while (userInput > 100 || userInput < 0);