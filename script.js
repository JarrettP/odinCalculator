const add = function(input) {
	let sum = input[0];
    input = input.slice(1);
    input.forEach(element => {
        sum += element;    
    });
    return sum;
};

const subtract = function(input) {
    let sum = input[0];
    input = input.slice(1);
    input.forEach(element => {
        sum -= element;    
    });
    return sum;
};

const multiply = function(input) {
	let sum = input[0];
    input = input.slice(1);
    input.forEach(element => {
        sum *= element;    
    });
    return sum;
};

const divide = function(input) {
    let sum = input[0];
    input = input.slice(1);
    input.forEach(element => {
        sum /= element;
    });
    return sum;
};

const power = function(input) {
    return input[0] ** input[1];
};

const factorial = function(input) {
	let sum = 1;
    for (let i = input; i > 0; i--) {
        sum *= i;
    }
    return sum;
};

const operate = function(input,operand) {
    // ...
};