/*Work with a partner to create a monkey object, which has the following properties:

* name
* species
* foodsEaten

And the following methods:
* eatSomething(thingAsString)
* introduce: producers a string introducing itself, including its name, species, and what it's eaten.

Create 3 monkeys total. Make sure all 3 monkeys have all properties set and methods defined.

Exercise your monkeys by retrieving their properties and using their methods. Practice using both syntaxes
for retrieving properties (dot notation and brackets).

*/

var Monkey = function(name, species) {

    this.name = name;
    this.species = species;
    this.foodsEaten = [];

    this.eatSomething = function(food) {
        this.foodsEaten.push(food);
        // console.log("Yummy. Thank you for the", food);

    }

    this.introduce = function() {
        console.log("Hello, my name is " + this.name + "!");
        console.log("I am member of the "+ this.species + " family of monkeys.");


        // one item: item.
        // two items: item "and" item.
        // three items: item , item, and item;
        // no items: i'm hungry
        if(this.foodsEaten.length === 1) {
            console.log("Today I've eaten", this.foodsEaten[0] + "\n");
        } else if (this.foodsEaten.length === 2) {
            console.log("Today I've eaten " + this.foodsEaten[0] + " and " + this.foodsEaten[1] + ". \n");
        } else if (this.foodsEaten.length > 2) {
            var foodList = "";
            for(var i=0; i < this.foodsEaten.length-1; i++) {
                var foodList = foodList.concat(this.foodsEaten[i] + ", ");
            }
            var allFood = foodList + "and " + this.foodsEaten[(this.foodsEaten.length-1)];
            console.log("Today I've eaten " + allFood + ".\n");

        } else {
            console.log("I'm hungry. Please feed me something. \n");
        }

    }


};

var Bob = new Monkey("Bob", "Mandrill");
Bob.eatSomething("bananas");
Bob.eatSomething("ice cream");
Bob.eatSomething("popcorn");
Bob.introduce();

var John = new Monkey("John", "Black howler");
John.introduce();


var Tom = new Monkey("Tom", "Brown one");
Tom.eatSomething("apples");
Tom.eatSomething("bacon");
Tom.introduce();

var Jack = new Monkey("Jack", "Black one");
Jack.eatSomething("sugar");
Jack.introduce();




