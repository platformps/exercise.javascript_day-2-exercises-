let userInput = "";

do {
    // Ask user to input

    userInput = prompt("Enter an integer number");

} while (!(userInput <= 0) && (userInput > 100));

// function that calculate the square root of the value input by the user
function name(userInput) {
    let userSquareRoot = parseInt(userInput);
    userSquareRoot = userSquareRoot * userSquareRoot; // user input squared.
    return userSquareRoot;
}

// alert boc prints the value in a pop box on the user's browser
alert("The number " + userInput + " squared " + " is " + name(userInput));