var fibonacci = [0, 1];

// slide 26 assignment.
let result = 0;
let thirdNumber = fibonacci[0];
let fourthNumber = fibonacci[1];

for (let i = 0; i < 10; i++) {
    result = thirdNumber + fourthNumber;
    console.log(result);
    thirdNumber = fourthNumber;
    fourthNumber = result;

}