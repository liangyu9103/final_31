let c, f;
//跳出視窗
//ti.Fixed(2):取到小數第二位
c = Number(prompt('Enter a temperature in :')).toFixed(2);
console.log('c', c);

f = ((c * 9.0) / 5 + 32).toFixed(2);
//＄{}:變數
const output = `${c} C = ${f} F`;
console.log(output);

//取得result位置
const result = document.querySelector('.result');
result.textContent = output;
