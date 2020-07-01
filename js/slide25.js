function Replaceelements(){
var myData = [];
 var a =" ";
 for(var i=0;i<10;i++){
     myData[i]=1;
    a=a+myData[i];
 }
  console.log("Initial Array Elements  "+a);

  var i=prompt("enter the value of cell index in replace elements");
  if(i>10)
  {
       i=prompt("Reenter the correct cell index between 1 and 10");
      // i=prompt("enter the value of cell index");
  }
  var v=prompt("enter the value in replace elements");
  myData[i-1]=v;
  console.log("Replaced Array Elements   "+myData);
}
