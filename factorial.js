//This just basically find the factorial of anything you enter in.... xD
var readline = require("readline");

//Set up readline.
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Declare integers, set default values to basically the equivilant of nothing.
var x = 0;
var answer = 1;

rl.question("Enter in a number, to find the factorial: ", function(input) {
    x = input;
    //Generate answer.
    for(var i = x; i > 0; i--) {
      answer *= i;
    }
    //We have our answer, output it and exit the script.
    console.log("Answer to %s! is: %s", x, answer);
    process.exit(0);
});
