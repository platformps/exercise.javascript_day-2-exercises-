function slide26(n) {
    //print the fibonacci number for given number n

       if (n == 0)
            return 0;

        if (n == 1)
            return 1;

        //using recursion
        return (slide26(n-1) + slide26(n-2));
}