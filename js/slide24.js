//Creat an array of integer.

var myData = []; // create an undefined array


// use a for loop to add values to the indices/ index.
for (let i = 0; i < 10; i++) {
    myData[i] = 1;

}

console.log(myData) // prints the value of all array element.

myDataUpdate();


function myDataUpdate() {

    do {
        var userIndex = prompt("Enter an index from the array above: ");
        var str1 = parseInt(userIndex);
        if (str1 > 10) {
            console.log("Array out of bound");
            break;

        }

        var userValue = prompt("Enter an index from the array above: ");
        var str2 = parseInt(userValue);


        for (let i = str1; i <= str1; i++) {

            myData[str1] = str2;

        }
        var proceed = prompt("Do you want to continue: Y/N");

    } while (!str1 > myData.length);

}


console.log("My Data " + myData);