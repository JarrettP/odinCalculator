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

const operate = function(input,operand) {
    // ...
};