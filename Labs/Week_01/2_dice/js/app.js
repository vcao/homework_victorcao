/*

Creating a page where every time the user hits the "Roll Dice" button, the screen randomly updates the two dice. Use the html and css code included in the starter code folder to get started.

1) Write down pseudocode for the following program.
• Randomizer Function 1-6
• Math.floor(Math.random()*(6-1)+1)


2) Follow the steps below to write your code.
* generate a random number between 1 - 6 and store to a variable, random1
* generate a random number between 1 - 6 and store to a variable, random2
* combine 'dice-' and random1 to form the random class for the first die, firstDie
* combine 'dice-' and random2 to form the random class for the second die, secondDie
* get the first die by ID and update the class for firstDie (hint: document.getElementById)
* get the second die by ID and update the class for secondDie (hint:document.getElementById)

3) Check to see if the Dice Roll has been clicked, if it has run the diceRoll function.

*/
function diceRoll() {
    console.log("Roll the dice");

    function randomizer() {
        return "dice-" + Math.floor(Math.random()*6+1);
    }

    var random1 = randomizer();
    var random2 = randomizer();

    document.getElementById('first-die').className = "dice-"+random1;
    document.getElementById('second-die').className = "dice-"+random2;

    // tests
    console.log("First die: " + random1);
    console.log("Second die: " + random2);

    // total
    var total = random1 + random2;
    console.log("Total: " + total);

    switch(total) {
      case 7:
      case 11:
        console.log("You win!");
        $("#rollin").hide();
        $("#lose").hide();
        $("#win").show();
        break;
      case 2:
      case 3:
      case 12:
        console.log("You lose!");
        $("#rollin").hide();
        $("#win").hide();
        $("#lose").show();
        break;
      default:
        console.log("Keep rollin'");
        $("#win").hide();
        $("#lose").hide();
        $("#rollin").show();
        break;
    }

}

document.getElementById('roll-dice').onclick = diceRoll;
