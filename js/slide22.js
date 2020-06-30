var userIn;
var loop = true;
do{
    userIn = prompt("Enter a integer in range of 0 < n < 100.");
    if(userIn > 0 && userIn < 100){
        loop = false;
        console.log("Number squared is " + userIn * userIn);
    }
}while(loop);