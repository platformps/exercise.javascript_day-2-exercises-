let userInput = window.prompt("Please enter an integer:");
while(true) {
    if(userInput > 0 && userInput < 100) {
        console.log(Math.pow(parseInt(userInput), 2));
        break;
    };
    userInput = window.prompt("Please re-enter:");
}