/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
    var startTime = new Date().getTime(); // Get the current time in milliseconds



    // Performing the calculation 
    
    var sum = 0;
    
    for(var i = 1; i <= n; i++){
        sum += 1;
    }
    
    var endTime = new Date().getTime(); // gets current time in miliseconds
    
    var elapsedTime = endTime - startTime;  // Calculate the elapsed time in milliseconds
    
    return elapsedTime / 1000; // convert milliseconds to seconds
}