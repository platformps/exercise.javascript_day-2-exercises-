let userInputLower= "";
let userInputUpper="";

    userInputLower= window.prompt("Please Enter L : ");
    userInputUpper= window.prompt("Please Enter U : ");

    let arrayLength = userInputUpper-userInputLower;
    var array=[];
    for(let i=0; i< arrayLength; i++){
        array[i] = parseInt(userInputLower) + i;
    }
    console.log(array) ;
    alert(array);
