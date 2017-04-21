// Write an IIFE function that takes a timer argument.
// The function will automatically execute and count up every second until the specified argument.
// Use the setTimeout function to count up.
// Hint: a second is the timer passed * 1000 (milliseconds).


// IIFE with an endTime
(function(endTime) {
    for(var i = 1; i <= endTime; i++) {
        (function countDown(j) {
            setTimeout(
              function timer() {
                  $('#timer').html('<h1>' + j + '</h1>');
              }, j*1000);
        })(i);
    } // count up loop
})(5);

//run the IIFE count down function that passes the count parameter
// setTimeout
// define timer function
// report out the count tied to time
//set time based on passed parameter
// pass count up i variable parameter as j parameter
//invoke function with a specific endTime parameter



