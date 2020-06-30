function fibonacci(someInteger){
    if(someInteger == 0){
        return 0;
    }
    if(someInteger == 1) {
        return 1;
    }
    return fibonacci(someInteger-1) + fibonacci(someInteger-2);

}

for(let i=0; i<59; i++){
    console.log(fibonacci(i));
}