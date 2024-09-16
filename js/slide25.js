var myData = new Array(10);
//Fill array
for(var i = 0; i < myData.length; i++){
    myData[i] = 1;
}
//Print array
for(var i = 0; i < myData.length; i++){
    console.log(myData[i]);    
}

//Have user overwrite an index
do{
    var index = prompt("Enter cell index. Range of 0 >= n < 10")
    //Break loop if index is not in range
    if(index > 9 || index < 0){
        break;
    }

    var value = prompt("Enter value for index.")
    myData[index] = value;

    for(var i = 0; i < myData.length; i++){
        console.log(myData[i]);    
    }
}while(true);