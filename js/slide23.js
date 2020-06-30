let L = window.prompt("Please Enter L: ");
let U = window.prompt("Please enter U: ");
var outputData = L;
while (L < U - 1) {
  L++;
  outputData += " " + L;
}

console.log(outputData);
