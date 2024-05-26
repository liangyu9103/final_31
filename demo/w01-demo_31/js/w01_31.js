//alert('hello'); 測試javascript是否可以用

//const常數；querySelector查詢；‘’常數
const userInput = document.querySelector('#input-number');

const addBtn = document.querySelector('#btn-add');
const subtractBtn = document.querySelector('#btn-subtract');
const multiplyBtn = document.querySelector('#btn-multiply');
const divideBtn = document.querySelector('#btn-divide');

const currentCalculationOutput = document.querySelector('#current-calculation');
const currentResultOutput = document.querySelector('#current-result');

//‘輸出字串’
// console.log('userInput', userInput);
// console.log('addBtn', addBtn);
// console.log('subtractBtn', subtractBtn);
//console.log('multiplyBtn', multiplyBtn);
//console.log('divideBtn', divideBtn);
// console.log('currentCalculationOutput', currentCalculationOutput);
// console.log('currentResultOutput', currentResultOutput);

const defaultResult = 0;
//數值會改變，設let變數
let currentResult = defaultResult;

function getUserInput() {
  // return userInput.value
  return parseInt(userInput.value);
}

function outputResult(result, text) {
  currentCalculationOutput.textContent = text;
  currentResultOutput.textContent = result;
}

//add程式
//operand運算元
function add() {
  const operand1 = currentResult;
  const operand2 = getUserInput();
  //console.log(operand1, operand2, operand1 + operand2);
  //相加
  currentResult = operand1 + operand2;
  // `字串裡面可以夾變數`
  const calTest = `${operand1} + ${operand2}`;
  console.log(`${operand1} + ${operand2} = ${currentResult}`);
  outputResult(currentResult, calTest);
}
//mouse click後交給add程式處理
addBtn.addEventListener('click', add);

//subtract程式
function subtract() {
  const operand1 = currentResult;
  const operand2 = getUserInput();
  currentResult = operand1 - operand2;
  const calTest = `${operand1} - ${operand2}`;
  console.log(`${operand1} - ${operand2} = ${currentResult}`);
  outputResult(currentResult, calTest);
}
subtractBtn.addEventListener('click', subtract);

//multiply
function multiply() {
  const operand1 = currentResult;
  const operand2 = getUserInput();
  currentResult = operand1 * operand2;
  const calTest = `${operand1} * ${operand2}`;
  console.log(`${operand1} * ${operand2} = ${currentResult}`);
  outputResult(currentResult, calTest);
}
multiplyBtn.addEventListener('click', multiply);

//divide
function divide() {
  const operand1 = currentResult;
  const operand2 = getUserInput();
  if (operand2 == 0) alert('cannot divide by 0');
  else {
    currentResult = operand1 / operand2;
    const calTest = `${operand1} / ${operand2}`;
    console.log(`${operand1} / ${operand2} = ${currentResult}`);
    outputResult(currentResult, calTest);
  }
}
divideBtn.addEventListener('click', divide);
