function printArray(array) {
  let arrStr = "";
  for(let i = 0; i < array.length; i++)
    arrStr = arrStr + (array[i] + " ");
  console.log(arrStr);
}


let fibArr = [];
let i = 0; 

let lessThan59 = true;
let nextFib;

while(lessThan59) {
  if (i == 0)
    fibArr.push(0);
  else if (i == 1)
    fibArr.push(1);
  else {
    nextFib = fibArr[i-1] + fibArr[i-2];
    if (nextFib < 59)
      fibArr.push(nextFib);
    else
      lessThan59 = false;
  }
  i++;
}

console.log("The Fibonacci numbers less than 59 are: \n");
printArray(fibArr);