const calculateBtn = document.querySelector('#calculate');
const bmiResult = document.querySelector('#result');
const suggest = document.querySelector('#suggest');
const weight = document.querySelector('#weight');
const height = document.querySelector('#height');

function weightInput() {
  // return userInput.value
  return parseInt(weight.value);
}

function heightInput() {
  // return userInput.value
  return parseInt(height.value);
}

function outputResult(result, text) {
  let bmiResult = bmiCalc_31(height, weight);
  calculateBtn.textContent = text;
  bmiResult.textContent = result;
  suggest.textContent = text;
}

function bmiCalc_31(weight, height) {
  weight = weightInput().toFixed(2);
  height = heightInput().toFixed(2);
  console.log('weight', weight);
  bmiResult.textContent = weight / (height * height);
  return weight / (height * height);
}

function bmiCalcSuggestion_31(height, weight) {
  let result = bmiCalc_31(height, weight).toFixed(2);
  if (result < 18.5) {
    let normal_low = bmi_normal_low(height);
    suggest.textContent = `Your BMI is ${result} Underweight. add at least ${(
      normal_low - weight
    ).toFixed(2)}kg.`;
  } else if (result < 24) {
    suggest.textContent = `Your BMI is${result}normal.`;
  } else {
    let normal_high = bmi_normal_high(height);
    console.log('normal_high', normal_high);
    suggest.textContent = `Your BMI is ${result} Overweight. reduce at least ${(
      weight - normal_high
    ).toFixed(2)}kg to normal.`;
  }
}

function bmi_normal_low(height) {
  return 18.5 * (height * height);
}
function bmi_normal_high(height) {
  return 24 * (height * height);
}

// function bmiDataCalcSuggestion(data) {
//   data.forEach(function (item) {
//     bmiCalcSuggestion_31(item.height, item.weight);
//   });
// }

calculateBtn.addEventListener('click', bmiCalcSuggestion_31);
