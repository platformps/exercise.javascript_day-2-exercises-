var myData = [];
var index;
var value;
for (i=0; i < 10; i++){
    myData[i] = 1;
    
}
console.log(myData);



for (i=0; i < 10; i ++) {
    index = parseInt( prompt("Please enter the index number: "));
    value = parseInt( prompt("Please enter the value: "));
    if(index >=0 && index < 10) {
        
        myData[index] = value; 
        console.log(myData);     
    } else {
        console.log("Index of out of bounds!");
        
        break;
    }
   

}   
    
    