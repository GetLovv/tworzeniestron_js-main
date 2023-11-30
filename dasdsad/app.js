let input = '';
let variableCount = 0;

function appendInput(value) {
    if (value === '+' || value === '-' || value === '*' || value === '/') {
        if (variableCount === 1) {
            calculateResult();
            variableCount = 0;
        } else {
            variableCount++;
        }
    }

    if (input.length < 2) {
        input += value;
        document.getElementById('result').value = input;
    }
}

function clearInput() {
    input = '';
    variableCount = 0;
    document.getElementById('result').value = '';
}

function calculateResult() {
    try {
        input = eval(input);
        document.getElementById('result').value = input;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}