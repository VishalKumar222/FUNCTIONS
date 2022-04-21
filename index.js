function zeroPrarameter() {
    console.log("I'am Zero parameter");
}
zeroPrarameter();

//Q2.  Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7"
let sum = (a, b) => {
    console.log(`The sum of ${a} and ${b} is ${a+b}`)
}
sum(3, 4);

//Q.3  Create one arrow function
const arrow = () => {
    console.log("I am arrow function")
}
arrow();

// Q.4   "Print output: 
var x = 21;
var girl = function() {
    console.log(x);
    var x = 20;
};
girl();
//the output is undefined

//Q.5  Print output: 
var x = 21;
girl();
console.log(x)

function girl() {
    console.log(x);
    var x = 20;
};
//Output-21


// Q.6   Write a function that accepts parameter n and returns factorial of n

let factorial = (n) => {
    let fact = 1;
    for (let i = 2; i <= n; i++) {
        if (n == 0) {
            fact = 1;
            break;
        }
        fact *= i;
    }
    console.log("the factorial of the" + n + "is:" + fact);
}
factorial(5);