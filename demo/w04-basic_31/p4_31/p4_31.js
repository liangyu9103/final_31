let count = 0;

//#:id用井字號
const value = document.querySelector('#value');
//多個用all;class用.btn
const btns = document.querySelectorAll('.btn');

console.log('value', value);
console.log('btns', btns);

//forEach監聽每一個;() => {}; e:每一個事件
//e.currentTarget:抓到你所點的位置，”滑鼠事件“
//e.currentTarget.classList：弄成一個陣列
btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    console.log('e', e.currentTarget.classList);
    const styles = e.currentTarget.classList;
    //if 包含decrease就-1,if 包含reset就歸0,
    if (styles.contains('decrease')) {
      count--;
    } else if (styles.contains('reset')) {
      count = 0;
    } else if (styles.contains('increase')) {
      count++;
    }
    //if count>0,顏色改成綠色
    if (count > 0) {
      value.style.color = 'green';
    } else if (count === 0) {
      value.style.color = '#222';
    } else if (count < 0) {
      value.style.color = 'red';
    }

    //textContent顯示內容;把value的值換成count
    value.textContent = count;
  });
});
