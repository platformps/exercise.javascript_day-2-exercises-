var myData = new Array(10);
for (var j = 0; j < 10; j++) {
    myData[j] = 1;
}
do {
    console.log(myData.join(" ").toString());
    
    var i = prompt("Which index number (starting from 0) do you want to change?");
    if (i <= 0 || i > 10) {
        prompt("Your number is outside the range. Goodbye!");
        break;
    }
    if (i >= 0 && i < 10) {
        var v = prompt("What would you like the new value to be?");
           
    myData.splice(i,i,v);
    console.log(myData.join(" ").toString());
    }

} while (i < 0 || i > 10);
