//alert('hello'); ����javascript�O�_�i�H��

//const�`�ơFquerySelector�d�ߡF�����`��
const userInput = document.querySelector('#input-number');

const addBtn = document.querySelector('#btn-add');
const subtractBtn = document.querySelector('#btn-subtract');
const multiplyBtn = document.querySelector('#btn-multiply');
const divideBtn = document.querySelector('#btn-divide');

const currentCalculationOutput = document.querySelector('#current-calculation');
const currentResultOutput = document.querySelector('#current-result');

const defaultResult = 0;
//�ƭȷ|���ܡA�]let�ܼ�
let currentResult = defaultResult;

function getUserInput() {
  // return userInput.value
  return parseInt(userInput.value);
}

function outputResult(result, text) {
  currentCalculationOutput.textContent = text;
  currentResultOutput.textContent = result;
}

//add�{��
//operand�B�⤸
function add() {
  const operand1 = currentResult;
  const operand2 = getUserInput();
  //console.log(operand1, operand2, operand1 + operand2);
  //�ۥ[
  currentResult = operand1 + operand2;
  // `�r��̭��i�H���ܼ�`
  const calTest = `${operand1} + ${operand2}`;
  console.log(`${operand1} + ${operand2} = ${currentResult}`);
  outputResult(currentResult, calTest);
}
