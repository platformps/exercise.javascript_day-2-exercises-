var mydata=[];
let userInputIndex= "";
let userInputValue="";

for(let i=0; i< 10; i++){
    mydata[i] = 1;
}
console.log(mydata);

do{
    userInputIndex= window.prompt("Please Enter Index : ");
    if(userInputIndex >=10){
        console.log("Index out of range");
        break;
    }
    userInputValue= window.prompt("Please Enter Value : ");
    mydata[userInputIndex] = userInputValue;
 } while(userInputIndex >=0 && userInputIndex < 10);
 console.log(mydata);