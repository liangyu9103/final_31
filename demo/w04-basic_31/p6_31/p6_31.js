import { bmi_data } from './data_31.js';

//import bmi_data再另外設一個變數bmi_data_31，改資料比較不會出錯
let bmi_data_31 = bmi_data;
console.log('bmi_data', bmi_data_31);

//same-->const bmiCalc_31 = (height, weight) => {}
function bmiCalc_31(height, weight) {
  return weight / (height * height);
}

//顯示bmiCalc_31計算結果
function bmiCalcResult_31(height, weight) {
  let bmi = bmiCalc_31(height, weight).toFixed(2);
  console.log(`For (h,w) = (${height},${weight}), the BMI = ${bmi}`);
}
function bmiDataCalc(data) {
  data.forEach(function (item) {
    bmiCalcResult_31(item.height, item.weight);
  });
}

//bmiCalcResult_31(1.75, 55);
//bmiCalcResult_31(1.75, 70);
//bmiCalcResult_31(1.75, 85);

//bmiDataCalc(bmi_data_31);

//////////////////////////////////////////////////////////////////

//建立建議標準
function bmi_normal_low(height) {
  return 18.5 * height * height;
}
function bmi_normal_height(height) {
  return 24 * height * height;
}

//顯示bmiCalc_31建議結果
function bmiCalcSuggestion_31(height, weight) {
  let bmi = bmiCalc_31(height, weight).toFixed(2);
  if (bmi < 18.5) {
    let normal_low = bmi_normal_low(height);
    console.log(
      `For (h,w) = (${height},${weight}), the BMI = ${bmi} which is ${(
        normal_low - weight
      ).toFixed(2)} kg lower than normal`
    );
  } else if (bmi < 24) {
    console.log(
      `For (h,w) = (${height},${weight}), the BMI = ${bmi} which is normal`
    );
  } else {
    let normal_height = bmi_normal_height(height);
    //console.log('normal_height', normal_height);
    console.log(
      `For (h,w) = (${height},${weight}), the BMI = ${bmi} which is ${(
        weight - normal_height
      ).toFixed(2)} kg height than normal`
    );
  }
}

function bmiDataCalcSuggestion(data) {
  data.forEach(function (item) {
    bmiCalcSuggestion_31(item.height, item.weight);
  });
}

bmiDataCalcSuggestion(bmi_data_31);
