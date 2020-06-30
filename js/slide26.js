function fibonacci(){
    var prevNum1;
    var prevNum2;
    var fibNumbers = Array(59);
    fibNumbers[0] = 0;
    fibNumbers[1] = 1;

    for (var i = 2; i < 59;i++ ){
        fibNumbers[i] = fibNumbers[i-1]+fibNumbers[i-2];
    }

    console.log(fibNumbers);
    document.getElementById('fibo').value = fibNumbers;
}