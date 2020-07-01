let userinput = null;
let output = null;

while(true){
    userinput = prompt("enter number");
    if (userinput <= 0)
    {
        continue;
    }
    else if (userinput >=100)
    {
        continue;
    }
    else if (userinput >0 && userinput<100)
    {
       
       
        output = userinput*userinput;
        console.log(output);
        
        break;
        
    }


    
}
