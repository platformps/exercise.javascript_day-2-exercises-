let arr = [];

for(let i = 0; i < 10; i++)
  arr[i] = 1;

for(let i = 0; i < 10; i++)
  console.log(arr[i] + " ");

let doneAsking = false;

while(!doneAsking) {
  let userIndex = prompt("Give me and index");
  let userValue = prompt("Give me a value");
  if(userIndex < arr.length)
    arr[userIndex] = userValue;
  else
    doneAsking = true;
}

alert("Goodbye! We could not assign the last value you provided. Index out of range!");

  