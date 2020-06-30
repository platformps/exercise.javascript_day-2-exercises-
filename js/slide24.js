function slide24() {
    //create an array of 10 intergers 
    // ask user to enter an array index and its value. Update the array with given value and print array.
    //continue till user enters invalid index

    let myData = [];

    for (var i = 0; i <10; i++)
        myData[i] = 1;
    
    console.log(myData);

    let inputIndex, inputValue;

    inputIndex = window.prompt("input index: ");
    while(inputIndex >= 0 && inputIndex < 10)
    {
        inputValue = window.prompt("Input Value: ");
        myData[inputIndex] = inputValue;
        console.log(myData);
        inputIndex = window.prompt("Input Index: ");
    }

    console.log("Index out of range. Exit!");

}