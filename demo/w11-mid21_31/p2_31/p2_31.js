const calculateBtn = document.querySelector('#calculate');
const bmiResult = document.querySelector('#result');
const suggest = document.querySelector('#suggest');

/*用arrary function方法，跟10~12行一樣意思 */
// const bmiCalc_31 = (height, weight) => {
//   return weight / (height * height);
// }

function bmiCalc_31(height, weight) {
  return weight / (height * height);
}
function bmi_normal_low(height) {
  return 18.5 * (height * height);
}
function bmi_normal_high(height) {
  return 24 * (height * height);
}

const calculateBMI = () => {
  /*抓到位置#weight的value*/
  const weight = Number(document.querySelector('#weight').value);
  const height = Number(document.querySelector('#height').value / 100);

  /*計算BMI，建立變數*/
  const bmi = bmiCalc_31(height, weight);
  const normal_low = bmi_normal_low(height);
  const normal_high = bmi_normal_high(height);

  /*宣告let變數在function裡面，function外面看不到*/
  let status;
  let suggestion;

  if (bmi < 18.5) {
    status = 'Underweight';
    suggestion = `add at least ${(normal_low - weight).toFixed(
      1
    )} kg to normal`;
  } else if (bmi <= 24) {
    status = 'Normal';
    suggestion = ``;
  } else {
    status = 'Overweight';
    suggestion = `reduce at least ${(weight - normal_high).toFixed(
      1
    )} kg to normal`;
  }

  /*顯示BMI結果*/
  bmiResult.innerHTML = `Your BMI is ${bmi.toFixed(1)}.${status}`;

  /*顯示BMI建議*/
  suggest.innerHTML = `${suggestion}`;
};

/*監聽按鈕，click下去後呼叫Function calculateBMI*/
calculateBtn.addEventListener('click', calculateBMI);
