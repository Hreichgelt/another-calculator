
// contain arguments passed to the CLI
// runs the application so it doesn't need to be included in CLI
const argvs = process.argv;
const argv = argvs.slice(2);

const operation = argv[0];
const operation2 = argv[1];
const operation3 = argv[2]
const operator1 = parseInt(argv[1]);
const operator2 = parseInt(argv[2]);
const operator3 = parseInt(argv[3]);
const operator4 = parseInt(argv[4]);


// function for addition 
if (operation === '+') {
    console.log('The answer is ' + (operator1 + operator2));
}

// function for subtraction 
if (operation === '-') {
    console.log('The answer is ' + (operator1 - operator2));
}

// function for multiplication 
if (operation === '*') {
    console.log('The answer is ' + (operator1 - operator2));
}


// function for division 
if (operation === '/') {
    console.log('The answer is ' + (operator1 / operator2));
}

// addition && subtraction
if (operation === '+-') {
    console.log('The answer is ' + ((operator1 + operator2) - (operator3 + operator4)));
} 
// addition && multiplication 
if (operation === '+*') {
    console.log('The answer is ' + ((operator1 + operator2) * (operator3 + operator4)));
}
// addition && division 
if (operation === '+/'){
    console.log('the answer is ' + ((operator1 + operator2) / (operator3 + operator4)));
}
// subtration && multiplication
if (operation === '-*'){
    console.log('The answer is ' + ((operator1 - operator2) * (operator3 - operator4)));
}
// subtraction && division 
if (operation === '-/'){
    console.log('The answer is ' + ((operator1 - operator2) / (operator3 - operator4)));
}

// division && Multiplication 

// All together now

// Clear

// thoughts: 
// switching to for loops? operator array = ['+', '-', '*', '/'];
// Switching to switch case? 