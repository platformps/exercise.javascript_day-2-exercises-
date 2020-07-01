function fibanocci(){
var a=[];
var f1=0;
var f2=1;
var f3;
 console.log(+f1);
 console.log(+f2);
 var n=prompt("enter the number range for fibanocci");
 for(i=1;i<=n;i++)
  {
  f3=f1+f2;
  console.log(+f3);
  f1=f2;
  f2=f3;
  }
}