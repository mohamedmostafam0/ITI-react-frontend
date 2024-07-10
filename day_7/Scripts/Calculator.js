let currentInput = ''; 
let currentOperator = ''; 
let resultShown = false; 


function updateDisplay(value) {
    document.getElementById('Answer').value = value;
}


function EnterNumber(num) {
    if (resultShown) {
        clearAll();
        resultShown = false;
    }
    currentInput += num;
    updateDisplay(currentInput);
}


function EnterOperator(op) {
    if (resultShown) {
        resultShown = false;
    }
    currentOperator = op;
    currentInput += ` ${op} `;
    updateDisplay(currentInput);
}

function EnterEqual() {
    if (resultShown) return;
    try {
        const result = eval(currentInput);
        currentInput = result.toString();
        updateDisplay(currentInput);
        resultShown = true;
    } catch (error) {
        currentInput = 'Error';
        updateDisplay(currentInput);
        resultShown = true;
    }
}

function EnterClear() {
    currentInput = '';
    currentOperator = '';
    updateDisplay(currentInput);
}

function clearAll() {
    clearDisplay();
    resultShown = false;
}

function clearDisplay() {
    currentInput = '';
    updateDisplay(currentInput);
}
