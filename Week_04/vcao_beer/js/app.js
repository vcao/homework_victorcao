/*
99 bottles of beer
2017 JS_SM_4
Assignment #1
Victor Cao

 */

// start for loop version
// 
function htmlizer(beer) {
    var output = "";
    output += '<div class="row"><div class="col-xs-12 beer text-center">';
    output += beer;
    output += '</div></div>';
    $('#beer-jug').append(output);
}

$(function() {
  for(var i = 100; i >= 0; i--) {
    if (i > 1) {
        var beer = i + ' 🍻🍻  on the wall, ' + i + ' 🍻🍻. <br>'
        var isBottle = (i == 2) ? "🍺  of beer on the wall.": (i - 1) + " 🍻🍻  on the wall";
        beer += "Take one ⬇️ , " + "👐  it around, " + isBottle + "<br>";
        htmlizer(beer);
    } else if (i == 1) {
        var beer = "🍺  on the wall, 🍺. <br>";
        beer += "Take one ⬇️  and 👐  it around, 🚫🍻  on the wall<br>";
        htmlizer(beer);
    } else if (i == 0) {
        var beer = "🚫🍻  on the wall, 🚫🍻.<br> ➡️ 🏬 🛒  and 💵  some more, 99 🍻🍻  on the wall.<br>";
        htmlizer(beer);
    }
  }
});