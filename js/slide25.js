let myData = [];
var interationCounter;
for (iterationCounter = 0; iterationCounter < 10; iterationCounter++) {
  myData[iterationCounter] = 1;
}
console.log(myData);

let indexInput = window.prompt("Enter the index that you want to change: ");
do {
  var valueInput = window.prompt("Enter the value: ");
  myData[indexInput] = valueInput;
  console.log(myData);
  indexInput = window.prompt("Enter the index that you want to change: ");
} while (indexInput < 10 && indexInput >= 0);

console.log("Index out of Range. Exit");
