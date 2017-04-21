// This is a named function declaration
function sayHello()
{
    console.log("Hello world");
}

function sayGoodbye() {
    console.log("Bye, Felicia!");
}

// Example
function setTime (callback, milliseconds) {
    //after millseconds
    callback();

}

// setTimeout is a built in JavaScript function
// It expects a function as a parameter
// This makes it a "Higher Order Function"
// It expects the 2nd parameter to be an integer value in milliseconds

//After 1000 milliseconds (or 1 second) the console.log will say "Hello World"
setTimeout(sayHello, 1000);
setTimeout(sayGoodbye, 1000);



