function slide22() {
    // TODO - write method definition here
    let num = window.prompt("Enter an integer between 0 and 100");
    while (true) 
    {
        if (0 < num &&  num < 100)
            break;
        else
        	num = window.prompt("Please Re-enter: ");
    }
   
    return num*num;
}