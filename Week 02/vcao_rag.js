/*
Random Address Generator
2017 JS_SM_4
Assignment #2
Victor Cao

- Write a script that can generate random addresses
- As a first step, create arrays that contain dummy data for each of the following: street number, street name, city name, state name and zip code
- Your script should randomly select one item from each of these arrays and then use them to construct a random address
- Each time you run the script, it should print a new randomly-generated address to the terminal. For example:
    - `node random-address.js`
    - `=> 34578 Dolphin Street, Wonka NY, 44506`
*/

// Street number generator
var streetNum = (Math.floor(Math.random()*10000)).toString(); //street number from 0 to 10000, and store value as string.

// dumb arrays
var streetNames = ["Walnut Ave.", "Avenger St.", "Bixby Rd.", "Rocky Rd.", "Re St."];
var cities = ["Metropolis", "Gotham", "Dystopia", "Utopia", "Hogsworth"];
var states = ["CA", "CO", "NY", "MT", "OR"];
var zipCodes = Math.floor(Math.random() * (100000-501) + 501); // zip code generator. Establish three-digit zip codes greater than or equal to 501, but less than 100,000.


if (zipCodes < 1000) {
    var zipCode = "00" + zipCodes.toString(); // for zip codes that are three digits
} else if (zipCodes < 10000) {
    var zipCode = "0" + zipCodes.toString(); // for zip codes that are four digits
} else {
    var zipCode = zipCodes.toString(); // five digits will convert to string
}

// Generate random indexes
var streetIndex = Math.floor(Math.random()*5); // range 0-4
var cityIndex = Math.floor(Math.random()*5); // range 0-4
var stateIndex = Math.floor(Math.random()*5); // range 0-4


// Output to console random street number, street name, cities, states, and zip code
console.log(streetNum + " " + streetNames[streetIndex] + ", " + cities[cityIndex] + ", " + states[stateIndex] + " " + zipCode);



// Alternative: generate random array index (0-4) by using a function

/*
 function numGen () {
    return Math.floor(Math.random()*5)
}

var streetIndex = numGen();
var cityIndex = numGen();
var stateIndex = numGen();

 */

// Test to verify all indexes are generated randomly
// console.log(" ");
// console.log("Random components test");
// console.log("Street Number: " + streetNum, typeof(streetNum));
// console.log("Street Name Index: " + streetIndex, typeof(streetIndex));
// console.log("City Index: " + cityIndex, typeof(cityIndex));
// console.log("State Index: " + stateIndex, typeof(stateIndex));
// console.log("Zip Code: " + zipCode, typeof(zipCode));