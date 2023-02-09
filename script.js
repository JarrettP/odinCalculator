function add(input) {
	let sum = input[0];
    input = input.slice(1);
    input.forEach(element => {
        sum += element;    
    });
    return sum;
}

function subtract(input) {
    let sum = input[0];
    input = input.slice(1);
    input.forEach(element => {
        sum -= element;    
    });
    return sum;
}

function multiply(input) {
	let sum = input[0];
    input = input.slice(1);
    input.forEach(element => {
        sum *= element;    
    });
    return sum;
}

function divide(input) {
    let sum = input[0];
    input = input.slice(1);
    input.forEach(element => {
        sum /= element;
    });
    return sum;
}

function operate(expression) {
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
}

if (document.body.addEventListener){
    document.body.addEventListener('click',buttonHandler,false);
}
else{
    document.body.attachEvent('onclick',buttonHandler);//for IE
}

function buttonHandler(event){
    event = event || window.event;
    var target = event.target || event.srcElement;

    let buttonSelection;
    switch (target.className) {
        case buttonSelection = 'number':
            console.log(target);
            if (displayValue.length >= 9) {
                break;
            }
            if (displayValue == '0' && target.id == 'zero') {
                break;   
            }
            if (displayValue == '0' && !(target.id == 'zero')) {
                displayValue = target.textContent;
                updateDisplay();
                break;
            }
            displayValue = displayValue + target.textContent;
            updateDisplay();
            break;
        case buttonSelection = 'action1':
            action1(target.id);
            break;
        case buttonSelection = 'action2':
            action2(target.id);
            break;
    }
}

function action1(target) {
    let buttonTarget;
    switch (target) {
        case buttonTarget = 'equals':
            console.log(target);
            break;
        case buttonTarget = 'add':
            console.log(target);
            break;
        case buttonTarget = 'subtract':
            console.log(target);
            break;
        case buttonTarget = 'multiply':
            console.log(target);
            break;
        case buttonTarget = 'divide':
            console.log(target);
            break;
    }
}

function action2(target) {
    let buttonTarget;
    switch (target) {
        case buttonTarget = 'clear':
            console.log(target);
            displayValue = 0;
            updateDisplay();
            break;
        case buttonTarget = 'sign':
            console.log(target);
            break;
        case buttonTarget = 'percent':
            console.log(target);
            break;
    }
}

function updateClear() {
    // Change 'AC' to 'C' after a number is input
    // and follow iOS calculator clear behavior.
    return;
}

function updateDisplay() {
    document.getElementById('display').textContent = displayValue;
}

let displayValue = '';
let expression = [];
let output = 0;
let input = [];