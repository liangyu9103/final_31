const userInput = document.querySelector('#input-number');

const cBtn = document.querySelector('#btn-c');
const fBtn = document.querySelector('#btn-f');

const currentCalculationOutput = document.querySelector('#current-calculation');
const currentResultOutput = document.querySelector('#current-result');

let currentResult = 0; // Assuming you have a variable to store the current result

function getUserInput() {
  return parseFloat(userInput.value);
}

function updateOutput(input, result, unit) {
  const output = `${input} ${unit} = ${result.toFixed(2)} ${
    unit === 'C' ? 'F' : 'C'
  }`;
  currentCalculationOutput.textContent = output;
  currentResultOutput.textContent = `Result: ${result.toFixed(2)} ${
    unit === 'C' ? 'F' : 'C'
  }`;
}

function c() {
  const celsius = getUserInput();
  const fahrenheit = (celsius * 9.0) / 5 + 32;
  updateOutput(celsius, fahrenheit, 'C');
  currentResult = fahrenheit;
}

function f() {
  const fahrenheit = getUserInput();
  const celsius = ((fahrenheit - 32) * 5.0) / 9.0;
  updateOutput(fahrenheit, celsius, 'F');
  currentResult = celsius;
}

cBtn.addEventListener('click', c);
fBtn.addEventListener('click', f);
