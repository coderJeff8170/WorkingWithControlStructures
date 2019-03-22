// var y = 1;
// for(console.log("a for loop");true;console.log("looping")) {
//     console.log(y);
//     y++;
//     if(y == 10) break;
// }

//consider

var y = 1;
x = 0;
for (;true; x += y) {
    console.log(x);
    console.log(y);

    y++;
    if(y == 10) break;
}