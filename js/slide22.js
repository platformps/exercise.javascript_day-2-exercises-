
let userInput = -1;
let reEnter = false;
let promptText = "Please enter an integer: ";

while(userInput <= 0 || userInput >= 100) {
  userInput = window.prompt(promptText);
  promptText = "Please re-enter: "
}

alert("The number squared is: " + userInput*userInput);