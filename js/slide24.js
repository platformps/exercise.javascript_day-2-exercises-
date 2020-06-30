 function ReplaceArrayelements(){
 var myData = [];
 var a =" ";
 for(var i=0;i<10;i++){
     myData[i]=1;
    a=a+myData[i];
  }
  console.log("Initial Array Elements  "+a);
  var i=prompt("enter the value of cell index in array elements");
  var v=prompt("enter the value in array elements");
  if(i<10)
  {
    myData[i-1]=v;
  }
  console.log("Replaced Array Elements   "+myData);
}
