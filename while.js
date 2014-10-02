var i = 99;

while (i >= 0) {
    if (i > 1) {
        console.log(i + " bottles of beer on the wall, " + i  + " bottles of beer. Take one down, pass it around " + (i-1) + " beers on the wall...");
    } else if (i === 1) {
        console.log(i + " bottle of beer on the wall, " + i  + " bottle of beer. Take one down, pass it around " + (i-1) + " beer on the wall...");
    } else {
        console.log("No bottles of beer on the wall, no bottles of beer. Can't take any more down :(");
    }
    i--;
}
