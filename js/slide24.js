let myData = new Array(10);
let cellIndex;
let newValue;
for (let i = 0; i < myData.length ; i++) {
    myData[i]=1;
}
while(1) {
    console.log(myData);
    cellIndex = prompt("Enter the cell index");
    newValue = prompt("Enter the new value");
    if ((cellIndex < 0 || cellIndex >= myData.length)) {
        alert("Invalid Input");
        break;
    } else {
        myData[cellIndex] = parseInt(newValue);
    }
}
  