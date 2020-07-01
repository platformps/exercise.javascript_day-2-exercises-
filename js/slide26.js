var f1 = 0;
var f2 = 1;

for (var i = 0; i < 30; i++) {
    console.log(f1);
    console.log(f2);
    f1 = f1 + f2;
    f2 = f2 + f1;
}