var myData=[];
for(let x = 0; x < 10; x++) {
    myData.push(1);
}
console.log(myData);

do {
    var cellIndex = prompt("Enter a cell index to change");
    if(cellIndex < 0 || cellIndex >= 10) { break; }
    var newValue = prompt("Enter new value for cell index " + cellIndex);
    myData[cellIndex] = newValue;
    console.log("New array:" + myData)
} while(cellIndex >= 0 && cellIndex < 10);


