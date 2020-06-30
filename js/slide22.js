// var userInput ="";
// //var number=0;
// do {
//    userInput = prompt("Enter a number between 1 and 100");
// } while(userInput<1 || userInput >100);
// console.log(userInput*userInput);

 var userInput= "";
 do{
    userInput= window.prompt("Please Enter a number");
 } while(userInput<0 || userInput>100);
alert("The number squared is" + userInput*userInput);

