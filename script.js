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
            if (!(displayValue.length >= 9)) {
                displayValue = displayValue + target.textContent;
                updateDisplay();
            }
            break;
        case buttonSelection = 'action1':

            break;
        case buttonSelection = 'action2':
            action2(target.id);
            break;
    }
}

function action2() {

}

function updateDisplay() {
    document.getElementById('display').textContent = displayValue;
}

let displayValue = '';
let expression = [];
let output = 0;
let input = [];