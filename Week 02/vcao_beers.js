/*
99 bottles of beer
2017 JS_SM_4
Assignment #1
Victor Cao

 */

// start for loop version

for(var i = 100; i >= 0; i--) {
  if (i > 1) {
      console.log("");
      console.log(i + " 🍻🍻  on the wall, " + i + " 🍻🍻. ");
      var isBottle = (i == 2) ? "🍺  of beer on the wall.": (i - 1) + " 🍻🍻  on the wall";
      console.log("Take one ⬇️ , " + "👐  it around, " + isBottle); // streamline
  } else if (i == 1) {
      console.log("");
      console.log("🍺  on the wall, 🍺.");
      console.log("Take one ⬇️  and 👐  it around, 🚫🍻  on the wall");
  } else if (i == 0) {
      console.log("");
      console.log ("🚫🍻  on the wall, 🚫🍻.");
      console.log("➡️ 🏬 🛒  and 💵  some more, 99 🍻🍻  on the wall.");
  }
}

// end for loop
// start while loop version


// var i = 99;
//
// while (i > 1) {
//     console.log(i + " bottles of beer on the wall, " + i + " bottles of beer.");
//     i--;
//     var isBottle = (i >= 1) ? i + " bottle of beer on the wall.": i + " bottles of beer on the wall";
//     console.log("Take one down, " + "pass it around, " + isBottle); // streamline
// }
// while (i > 0 ) {
//     console.log(i + " bottle of beer on the wall, " + i + " bottle of beer. ");
//     console.log("Take one down and pass it around, no more bottles of beer on the wall");
//     i--; //modify counter
// }
//
// console.log ("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");


// end while loop