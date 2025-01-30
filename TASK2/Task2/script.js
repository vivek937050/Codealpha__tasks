// script.js
let currentInput = '';
let previousInput = '';
let operator = null;

function appendNumber(number) {
  currentInput += number.toString();
  updateDisplay(currentInput);
}

function setOperator(op) {
  if (currentInput === '') return; // Prevent operator if no number is entered
  if (previousInput !== '') {
    calculate();
  }
  operator = op;
  previousInput = currentInput;
  currentInput = '';
}

function calculate() {
  if (operator === null || currentInput === '' || previousInput === '') return;
  
  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);

  switch (operator) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      if (current === 0) {
        alert("Error: Division by 0");
        clearDisplay();
        return;
      }
      result = prev / current;
      break;
  }

  currentInput = result.toString();
  operator = null;
  previousInput = '';
  updateDisplay(currentInput);
}

function clearDisplay() {
  currentInput = '';
  previousInput = '';
  operator = null;
  updateDisplay('');
}

function updateDisplay(value) {
  document.getElementById('display').value = value;
}
