function fibonacci(number){
if(number == 0){
    return 0;
}
if(number == 1){
    return 1;
}
return (fibonacci(number-1) + fibonacci(number - 2))
}
for(let i = 0; i< 59; i++){
    console.log(fibonacci(i));
}
