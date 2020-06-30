var num = 0;
do{
    num = prompt("Enter an integer between 1 and 100");
} while(!(num > 0 && num < 100));

console.log("Number squared is: " + num*num);
document.write("<h1>Number squared is: " + num*num + "</h1>");
