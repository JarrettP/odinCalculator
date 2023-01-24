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

const operate = function(expression) {
    input[0] = expression[0];
    input[1] = expression[2];
    
    switch (true) {
        case expression[1] == "+":
            output = add(input);
            break;
        case expression[1] == "-":
            output = subtract(input);
            break;
        case expression[1] == "*":
            output = multiply(input);
            break;
        case expression[1] == "/":
            output = divide(input);
            break;
    }
    return output;
};

let displayValue = 0;
let expression = [];
let output = 0;
let input = [];