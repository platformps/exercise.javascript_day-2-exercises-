let firstArray=new Array(10);
//fills all values in the array with 1's
for(let i=0;i<10;i++)
{
    firstArray[i]=1;
}

//prints all items in the array"

console.log(firstArray);

//asks the user to input  the cell  index i and change it to a new value in the range  of array (0 to 10)
// in a loop that keeps going until its not in range exit the javascript
// if 

let position=prompt("input index")


while(position>0 && position<10){
    let choice=prompt("input value");
    firstArray[position]=parseInt(choice);
    position=prompt("input index")
}
console.log(firstArray);
console.log("index out of range!. goodbye :(")