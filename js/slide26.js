let newArray = [0,1];
for(let i = 2 ; i < 59; i++ ) {
    let newValue = newArray[i-1] + newArray[i-2]
    newArray.push(newValue);
}

console.log(newArray);
