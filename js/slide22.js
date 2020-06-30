var number =0;
do {
    number = prompt("Enter a number from 1 to 99");
    if ((number > 0) && (number < 100)) {
        console.log(number + " squared is: " + number*number);
    }
    } while (number < 0 || number > 100);

    