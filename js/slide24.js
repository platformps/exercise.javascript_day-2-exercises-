let mydata = new Array(10);
let userInput = "";
let userValue = "";
for (let i = 0; i < 10; i++) {
    mydata[i] = 1;
}
console.log(mydata);

do {
    userInput = prompt("Enter the index number");
    if (userInput >= 0 && userInput < 10) {
        userValue = prompt("Enter the value for index");
        mydata[userInput] = userValue;
        console.log("Modified Array");
        console.log(mydata);
        break;
    }
} while (userInput < 0 || userInput >= 10);