var myData=[];
for(let x = 0; x < 10; x++) {
    myData.push(1);
}
console.log(myData);

console.log("Simulating user input for slide 25....");
var y = 0;
for(let x = 0; x < 10; x++) {
    y += 5;
    console.log("Changing value in index " + x + " to " + y);
    myData[x] = y;
}

console.log(myData)