//input two integers for the lower and upper limits of the interval
var L = prompt("Please enter Lower limit: ");
var U = prompt("Please enter Upper limit: ");
var rangeLU = [];
var i;

//looping from L to U
function generateRange(L, U) {
for (i <= L; i < U; i++) {
    rangeLU.push (i);
}   
return rangeLU + ' ';
}
