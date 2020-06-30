function upperLimit(){
    var num1;
    var num2;
    var interval = []    
    while(num1 == null && num2 == null){
        num1 = prompt("Please enter an lower limit");
        num2 = prompt("Please enter a upper limit");
    }
    for (var i = num1; i <num2;i++){
        interval.push(i);
    }
    document.getElementById("interval").value = interval;
    console.log(interval);
}