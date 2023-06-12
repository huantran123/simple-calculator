let expression = '';
const display = document.getElementById('display');

function appendValue(value) {
  expression += value;
  updateDisplay()
}

function deleteValue() {
  expression = expression.slice(0, -1)
  updateDisplay()
}

function clearDisplay() {
  expression = '';
  updateDisplay()
}

function toggleSign() {
  if (expression !== '') {
    const num = parseFloat(expression);
    expression = String(num * -1);
    updateDisplay()
  }
}

function calculateResult() {
  if (expression !== '') {
    let result;
    try {
      result = Function(`'use strict'; return (${expression});`)();
    } catch (error) {
      result = 'Error';
    }
    result = result % 1 === 0 ? result.toFixed(0) : parseFloat(result.toFixed(8)).toString().replace(/(\.\d+?)0+$/, "$1")
    expression = String(result);
    updateDisplay()
  }
}

function updateDisplay(text = expression) {
  display.textContent = text
}