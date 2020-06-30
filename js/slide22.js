function square(){
  do{
  var v = prompt("Please input an integer");
  }while(v <= 0 || v >= 100)
  console.log(v *v);
}

function interval(){
  var start = prompt("please enter L:");
  var end = prompt("please enter U:");
  var string = "";
  for(var i = start; i < end; i++){
    string = string + i + " ";
  } 
  console.log(string);
}

function editArray(){
var myData = new Array(); //initializing an array
for(var i = 0; i < 10; i++){
  myData[i] = 1;
  console.log(myData[i]);
}
var index = 0; //default untyped, should give a value
var value;
while(index >= 0 && index < 10){
  index = prompt("input the cell index ");
  value = prompt("input its value");
  myData[index] = parseInt(value);
  console.log(myData);
}
}

function fib(n){
  if (n == 0) return 0;
  if (n == 1) return 1;
  if (n == 2) return 1;
  return fib(n-1)+fib(n-2);
}

function output() {
  for (var i = 0; i < 60; i++){
    console.log(fib(i));
}
}
