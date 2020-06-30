function valid(num){
    var num;    
    while(!num > 0 && !num < 100){
        num = prompt("Please enter a number in the range 1  to 100 ");
    }
    document.getElementById('squared').value = num*num;
}