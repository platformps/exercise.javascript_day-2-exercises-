let myData = new Array(10);

for(let i = 0; i < myData.length; i++) {
    myData[i] = 1;
}
console.log(myData);

let index;
let value;
while(true) {
    index = window.prompt("Enter the index:");
    index = parseInt(index);

    // Breaks if the value is not within 1 and 10
    if(index < 0 || index >= 10) {
        break;
    }

    value = window.prompt("Enter the value:");
    myData[index] = parseInt(value);
    console.log(myData);
}