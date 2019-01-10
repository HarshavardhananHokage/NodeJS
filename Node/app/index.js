const readline = require('readline');
const calc = require('./calc');

//const numToAdd = [1,2,4,5,6,7];

let a, b;

let rl= readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Enter number 1: ", (num1) => {
    a = parseInt(num1);
    rl.question("Enter number 2: ", (num2) => {
        b = parseInt(num2);
        let answer = calc.sumOfTwo(a, b)
        console.log("Sum of numbers: " +answer);
        rl.close();
    });
});



//let answer = calc.sum(numToAdd);
//console.log("Sum of numbers: " +answer);
