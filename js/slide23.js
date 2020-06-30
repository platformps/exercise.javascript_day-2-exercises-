
userInput1 = prompt("Please enter L: ");
userInput2 = prompt("Please enter U: ");

let numbers = [];

for(num = userInput1; num<userInput2; num++)
  numbers.push(num);


for(let i=0; i<numbers.length; i++)
  console.log(numbers[i] + " ");