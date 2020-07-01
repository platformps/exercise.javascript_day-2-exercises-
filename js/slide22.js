

//Do While Statement
// do{
//   statements
// }
// while (condition);



let userInput;
do{
  userInput = prompt("Enter a number between 0 and 100:");
} 
while( isNaN(userInput) || userInput < 0 || userInput > 100 );

console.log(userInput);