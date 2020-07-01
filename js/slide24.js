var myData = new Array(10);
for (var j = 0; j < 10; j++) {
    myData[j] = 1;
}
do {
    var i;
    var v;
    console.log(myData.join(" ").toString());
 
    var i = console.log("Which index number (starting from 0) do you want to change?");
    ('input').keydown( function( event ) { //
        if ( event.which === 13 ) { //
            if (i < 0 || i > 10) {
        console.log("Your number is outside the range. Goodbye!");
        break;
        } 
    if (i<=10) {
        var v = console.log("What would you like the new value to be?");
    }
    } //
        } //
    ('input').keydown( function( event ) { //
        if ( event.which === 13 ) { //
  //  if (v <= 10) {       
    myData.splice(i,i,v);
    console.log(myData.join(" ").toString());
//    }
        }//
      }  //

} while (i < 0 || i > 10);