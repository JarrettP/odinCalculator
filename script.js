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

function calculate(expression) {
    input[0] = expression[0] * 1;
    input[1] = expression[2] * 1;
    
    switch (true) {
        case expression[1] === 'add':
            output = add(input);
            break;
        case expression[1] === 'subtract':
            output = subtract(input);
            break;
        case expression[1] === 'multiply':
            output = multiply(input);
            break;
        case expression[1] === 'divide':
            output = divide(input);
            break;
    }
    return output;
}


document.body.addEventListener('click',buttonHandler,false);

function buttonHandler(event){
    event = event || window.event;
    var target = event.target || event.srcElement;

    let buttonSelection;
    switch (target.className) {
        case buttonSelection = 'number':
            if (displayValue.length >= 9) {
                break;
            }
            if (displayValue === '0' && target.id === 'zero') {
                break;   
            }
            if (displayValue.includes('.') && target.id === 'point') {
                break;
            }
            if (displayValue === '0' && target.id === 'point') {
                displayValue = '0.'
                updateDisplay();
                updateClear();
                break;
            }
            if (displayValue === '0' && !(target.id === 'zero')) {
                displayValue = target.textContent;
                updateDisplay();
                updateClear();
                break;
            }
            displayValue += target.textContent;
            updateDisplay();
            updateClear();
            break;
        case buttonSelection = 'operation':
            operation(target.id);
            break;
        case buttonSelection = 'modifier':
            modifier(target.id);
            break;
    }
}

function operation(target) {

    const activeButton = document.querySelector('.active');
    if (activeButton != null) {
        activeButton.classList.remove('active')
    }
    

    button = document.getElementById(target);
    button.classList.add('active')

    if (target === 'equals') {
        calculate(input);
        // displayValue = '0';
    }
    expression.push(displayValue);
    expression.push(target);
    displayValue = '0';
}

function modifier(target) {
    let buttonTarget;
    switch (target) {
        case buttonTarget = 'clear':
            displayValue = '0';
            updateDisplay();
            updateClear(1);
            break;
        case buttonTarget = 'sign':
            displayValue *= -1
            updateDisplay();
            break;
        case buttonTarget = 'percent':
            displayValue /= 100;
            updateDisplay();
            break;
    }
}

function updateClear(clicked) {
    clearButton = document.getElementById('clear');
    if (clicked === 1) {
        clearButton.textContent = 'AC';
        return;
    }
    if (displayValue !== '0') {
        clearButton.textContent = 'C';
        return;
    }
}

function updateDisplay() {
    document.getElementById('display').textContent = displayValue;
}

let displayValue = '0';
let expression = [];
let output = '0';
let input = [];