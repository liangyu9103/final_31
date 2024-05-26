//alert('hello'); 代刚javascript琌ノ

//const盽计querySelector琩高ˉˇ盽计
const userInput = document.querySelector('#input-number');

const addBtn = document.querySelector('#btn-add');
const subtractBtn = document.querySelector('#btn-subtract');
const multiplyBtn = document.querySelector('#btn-multiply');
const divideBtn = document.querySelector('#btn-divide');

const currentCalculationOutput = document.querySelector('#current-calculation');
const currentResultOutput = document.querySelector('#current-result');

const defaultResult = 0;
//计穦э跑砞let跑计
let currentResult = defaultResult;

function getUserInput() {
  // return userInput.value
  return parseInt(userInput.value);
}

function outputResult(result, text) {
  currentCalculationOutput.textContent = text;
  currentResultOutput.textContent = result;
}

//add祘Α
//operand笲衡じ
function add() {
  const operand1 = currentResult;
  const operand2 = getUserInput();
  //console.log(operand1, operand2, operand1 + operand2);
  //
  currentResult = operand1 + operand2;
  // `﹃柑Ж跑计`
  const calTest = `${operand1} + ${operand2}`;
  console.log(`${operand1} + ${operand2} = ${currentResult}`);
  outputResult(currentResult, calTest);
}
