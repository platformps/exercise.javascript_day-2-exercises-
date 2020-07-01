
let integerArray = [];
for (let counter = 0; counter <= 59; counter++) {

    if (counter <= 1) {
        integerArray[counter] = counter;
    } else {
        integerArray[counter] = integerArray[counter - 1] + integerArray[counter - 2];
    }
}

for (let i = 0; i < integerArray.length; i++) {
    console.log(integerArray[i]);
}
