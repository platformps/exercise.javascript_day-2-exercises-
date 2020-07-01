

//Do While Statement
// do{
//   statements
// }
// while (condition);


let userInput = "";
while (userInput = prompt ("Enter a number between 1 and 100:")){
  if (isNaN(userInput) || userInput < 1 || userInput > 100){
    alert ("Re-enter number between 1 and 100:");
  } else {
    console.log(userInput);
    console.log(userInput + " squared is: " + userInput * userInput);
    break;
  }
}


