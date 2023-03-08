function add(input) {
	sum = input[0];
    input = input.slice(1);
    input.forEach(element => {
        sum += element;    
    });
    return sum;
}

function subtract(input) {
    sum = input[0];
    input = input.slice(1);
    input.forEach(element => {
        sum -= element;    
    });
    return sum;
}

function multiply(input) {
	sum = input[0];
    input = input.slice(1);
    input.forEach(element => {
        sum *= element;    
    });
    return sum;
}

function divide(input) {
    sum = input[0];
    input = input.slice(1);
    input.forEach(element => {
        sum /= element;
    });
    return sum;
}

function round(input) {
    floatingNumber = input + '';
    splitNumber = floatingNumber.substring(0,12).split('.');
    
    integer = splitNumber[0].length;
    decimals = 9 - integer;

    sum = Number(Math.round(input+'e'+decimals)+'e-'+decimals);
    return sum;
}

function operate(expression) {
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
    roundedOutput = round(output);
    displayValue = roundedOutput;
    updateDisplay();
}

document.body.addEventListener('click',buttonHandler,false);

function buttonHandler(event){
    event = event || window.event;
    var target = event.target || event.srcElement;

    let buttonSelection;
    switch (target.className) {
        case buttonSelection = 'number':
            if (lastPressed == 'equals') {
                expression = [];
                displayValue = '0';
                console.log(displayValue);
            }
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
            if (lastPressed == 'equals') {
                displayValue = document.getElementById('display').textContent;
                console.log(displayValue);
                expression = [];
                // expression.push(displayValue);
            }
            operation(target.id);
            break;
        case buttonSelection = 'modifier':
            modifier(target.id);
            break;
    }
    lastPressed = target.id;
}

function operation(input) {
    const activeButton = document.querySelector('.active');
    if (activeButton != null) {
        activeButton.classList.remove('active')
    }
    
    button = document.getElementById(input);
    if (input !== 'equals') {
        button.classList.add('active')
    }
    
    if (input == 'equals') {
        expression.push(displayValue);
        operate(expression);
    } else {
        expression.push(displayValue);
        displayValue = '0';
        expression.push(input);
    }
}

function modifier(input) {
    let buttonTarget;
    switch (input) {
        case buttonTarget = 'clear':
            displayValue = '0';
            updateDisplay();
            updateClear(1);
            expression = [];
            break;
        case buttonTarget = 'sign':
            displayValue *= -1;
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
let lastPressed = null;