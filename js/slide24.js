
let myData = [10];
let userInput1;
let userInput2;

for (let i = 0; i < 10; i++) {
  myData[i] = 1;
}
console.log(myData)

while(userInput1 = prompt("Enter the index:  ")&&(userInput2 = prompt("Enter the new index:  "))) {
    if ((isNaN(userInput1 && userInput2) || userInput1 && userInput2 < 0 || userInput1 && userInput2 > 10)) {
      alert("Out of range!");
      break;
   }
    else{
    myData[userInput1] = parseInt(userInput2);
    console.log(myData)
  }
}
