let myData=Array(10);
let i ="";
let v ="";



console.log(myData.length);

for(let i=0; i<myData.length; i++){
    myData[i]=1;
}
    console.log(myData);
for(let j =0; j<myData.length; j++)
{
    i=prompt("Enter cell index")
    {
        v=prompt("Enter new value")
        
        
     if(i>=0 && i<10)
        {
            myData[i] = v;
            console.log(myData);
            
        }
        if (i<0)
        {
            break;
            
        }
        if (i>9)
        {
            break;
            
        }
        
    }
}
    