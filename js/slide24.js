let myData = new Array(10);
for(let i=0;i < 10; i++){
    myData[i]=1;
    console.log(myData[i]+" ");

}
var input = [prompt("Please enter index."),prompt("Now, please enter number of change")];
while(input[0] >= 0){
     myData[input[0]]= input[1];
     for(let i=0;i < 10; i++){
        console.log(myData[i]+" ");
    
}
input = [prompt("Please enter index."),prompt("Now, please enter number of change")];
}