// Practice
// - Write a for loop that runs from 1 to 3
// - Put setTimeout inside the for loop
// - Multiply the milliseconds (1000) * i to make it so that Hello World prints to the console.log after 1, 2 & 3 seconds

for (var i = 1; i < 4; i++) {
    setTimeout(sayHello, 1000*i);
}

function sayHello()
{
    console.log("Hello world");
}

