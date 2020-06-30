function editArray(){
    var myData = Array(10).fill(1);
    console.log(myData);
    var userInput;
    var userIndex = null;
    while(true){
        userIndex = prompt("Enter index to edit");
        if (userIndex == null)
        break;

        if(userIndex < 10 && userIndex >= 0)
        userInput = prompt("Enter new value");
        else{
        console.log("Index of of range. Exit!!!")
        break;
        }

        userInput = parseInt(userInput,10);
        myData[userIndex] = userInput;
        userInput = null;
        document.getElementById('data').value = myData;
        console.log(myData);
    }
}