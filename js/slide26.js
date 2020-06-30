
var fibonacci =[];


for (i=0; i<=59; i++){
    if(i==0){
        fibonacci[i] = 0;
        console.log(fibonacci[i]);
    } else if (i==1) {
        fibonacci[i] = 1;
        console.log(fibonacci[i]);
    }
    else if (i==2){
        fibonacci[i] = 1;
        console.log(fibonacci[i]);
    } else {
        fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
        console.log(fibonacci[i]);
    }
    
}


