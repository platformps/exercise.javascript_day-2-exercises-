
var userInput1;
var userInput2;
var text = "";
for (userInput1=prompt ("Enter a number");
userInput2=prompt ("Enter a number");

function printRange(rangeStart, rangeStop) {

 for ((userInput1 = rangeStart) && (userInput2 <= rangeStop); i++; 
    text += i + ',');
  

  return text.slice(0, -1);
}

(printRange(0, -1)));