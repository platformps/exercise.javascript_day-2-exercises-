function slide23() {
    // Ask user to input two integers giving lower and upper limit of interval.
    //print all integers between lower interval (inclusive) and upper interval (exclusive)

    let lowerLimit, upperLimit, output = "";
    lowerLimit = window.prompt("Please enter lowerLimit: ");
    while (true)
    {
        if (isNaN(lowerLimit))
            lowerLimit = window.prompt("Please enter a valid number for lowerLimit : ");
        else
            break;
    
   }

    upperLimit = window.prompt("Please enter upperLimit: ");
    while (true) 
    {
        if (isNaN(upperLimit))
            upperLimit = window.prompt("Please enter a valid number for upperLimit : ");

        else if (upperLimit == lowerLimit)
        {
            output = lowerLimit;
            break;
        }

        else if (upperLimit < lowerLimit)
            upperLimit = window.prompt("Please enter upperLimit greater than the " + lowerLimit + ": ");

        else
        {
            for (var num =lowerLimit; num < upperLimit; num++)
                output = output + " " + num;
            break;
        }
    }
   
    return output;
}