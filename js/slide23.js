let lower = prompt("Please enter a lower limit");
let upper = prompt("Please enter an upper limit");
while(upper <= lower){
upper = prompt("Enter something higer");
}
let counter = lower;
while(counter != upper){
    document.write(counter+" ");
    counter ++
}