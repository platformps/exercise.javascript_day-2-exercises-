function printArray(array) {
  let arrStr = "";
  for(let i = 0; i < 10; i++)
    arrStr += array[i] + " ";
  console.log(arrStr);
}

let arr = [];

for(let i = 0; i < 10; i++)
  arr[i] = 1;

printArray(arr);

let doneAsking = false;

while(!doneAsking) {
  let userIndex = prompt("Give me and index");
  console.log("Input index: " + userIndex);
  let userValue = prompt("Give me a value");
  console.log("Input value: " + userValue);
  if(userIndex < arr.length && userIndex >= 0) {
    arr[userIndex] = userValue;
    printArray(arr);
  }
  else
    doneAsking = true;
}

console.log("Index out of range. Exit!");
