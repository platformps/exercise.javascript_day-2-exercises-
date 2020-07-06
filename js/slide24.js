var myData = [i];
myData.length = 10; 
for(var i = 0; i <= myData.length; i++) {
    myData[i] = 1;
}
console.log(myData);

var i = window.prompt('Input the cell index to change:');
do {
    var v = window.prompt('Enter new value:');
    myData[i] = v;
    console.log(myData);
    i = window.prompt('Enter the cell index to change:');

} while (i < 10 && i >= 0);
console.log('Index out of Range. Exit');