let lowerLimit = "";
let upperLimit = "";

do {
    lowerLimit = prompt("please enter lower limit");
    upperLimit = prompt("please enter Upper limit");
    if (lowerLimit < upperLimit) {
        for (let i = lowerLimit; i < upperLimit; i++) {
            console.log(i);
        }
        break;
    }
} while (lowerLimit > upperLimit);
