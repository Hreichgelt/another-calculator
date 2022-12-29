
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
if (operation === 'add') {
    console.log(operation + ' is ' + (operator1 + operator2));
}

// function for subtraction 
if (operator === 'subtract') {
    console.log(operation + ' is ' + (operator1 - operator2));
}

// function for multiplication 
if (operator === 'multiply') {
    console.log(operation + ' is ' + (operator1 - operator2));
}


// function for division 


// function for addition && subtraction

// function for addition && multiplication 

// function for addition && division 

// function for subtration && multiplication

// function for subtraction && division 

// division && Multiplication 