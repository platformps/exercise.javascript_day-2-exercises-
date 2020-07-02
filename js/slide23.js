let userInput = prompt("Enter a number to print number interval." + "\n" + "Enter lower level");

let userSecondInput = prompt("Enter the upper interval number");

// called the function and  printed the user values
userNumberInterval();


// function that check user input values and use for loop to print the values.
function userNumberInterval() {
    let str1 = parseInt(userInput);
    let str2 = parseInt(userSecondInput);
    for (let i = str1; i < str2; i++) {

        console.log(i + " ");

    }

}