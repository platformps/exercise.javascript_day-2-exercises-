let valL = window.prompt("Please enter L:");
let valU = window.prompt("Please enter U:");
let output = "";
valL = parseInt(valL);
valU = parseInt(valU);

if(valL >= valU) {
    console.log("No value within the range");
} else {
    while(valL - valU != 0) {
        output += valL + " ";
        valL++;
    }
}
console.log(output);

