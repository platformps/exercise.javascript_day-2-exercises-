
var input =prompt("Enter a number for a fibioncci sequence")
input=parseInt(input);
var f=[];
f[0]=0
f[1]=1

while(input>59 || input<0)
{
    input=prompt("Re-enter a number for a fibioncci sequence") 
}

if(input==0)
{
    console.log(f[0])
}

if(input==1)
{
    console.log(f[1])
}



for(var i=2;i<=input;i++)
{
    f[i]=f[i-2]+ f[i-1] 
    console.log(f[i]+"\n\t");
}