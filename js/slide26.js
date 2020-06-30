let fib =new Array (59);

for(let a=0;a<fib.length;a++){
    fib[a]=a+1;
}
for(let a= 0; a<=59;a++){
    if(a == 0){console.log(0)}
   else if(a == 1){console.log(1)}
   else console.log((a-1)+(a-2));
}