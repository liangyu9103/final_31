/*const,let宣告變數時,要放在最外面,不能在function內*/
/*定const(常數)資料不能改*/
const o = 'o';
const x = 'x';
/*定let(變數)資料可以更改*/
let turn = 0;
let done = false;

/*querySelectorAll選擇器*/
const container = document.querySelector('#container');

/*querySelectorAll取得所有,'css選擇器'*/
const allLi = document.querySelectorAll('#board li');
const resetBtn = document.querySelector('#reset');

console.log('container', container);
console.log('allLi', allLi);
console.log('restBtn', resetBtn);

/*reset Arrow function: "const x = () => {}" */
const reset = () => {
  /*點reset,class會變空值
  allLi[0].classList = '';
  點reset會變回＋號，改變文字內容
  allLi[0].textContent = '+';
  allLi[4].classList = '';
  allLi[4].textContent = '+'; */

  /*item每一個值[0]~[8]*/
  allLi.forEach((item) => {
    item.classList = '';
    item.textContent = '+';
  });

  //css搬過來要去掉“-"符號,第二個字開頭變大寫
  container.style.backgroundColor = '#666';
  turn = 0;
  done = false;
};

const checkWin = (player) => {
  /*p是一個陣列*/
  let p = [];
  allLi.forEach((item) => {
    p.push(item.classList.contains(player));
  });
  /*抓到值是x還是o,true or false*/
  console.log('p', p);
  /*0用p1取代,1用p2取代....*/
  const [p1, p2, p3, p4, p5, p6, p7, p8, p9] = p;
  if (
    (p1 && p2 && p3) ||
    (p4 && p5 && p6) ||
    (p7 && p8 && p9) ||
    (p1 && p4 && p7) ||
    (p2 && p5 && p8) ||
    (p3 && p6 && p9) ||
    (p1 && p5 && p9) ||
    (p3 && p5 && p7)
  )
    /*return true到checkWin */
    return true;
  else return false;
};

const winMessage = (player) => {
  if (player === 'o') {
    container.style.backgroundColor = 'rgba(144, 238, 144, 0.5)';
  } else {
    container.style.backgroundColor = 'rgba(240, 118, 128, 0.726)';
  }
  alert(`player ${player} wins`);
};

allLi.forEach((item) => {
  /*監控每一個item*/
  item.addEventListener('click', () => {
    if (item.classList.contains('disabled')) {
      alert('already filled');
    } else {
      if (turn % 2 === 0) {
        /*偶數,"===“指定*/
        item.textContent = 'O';
        /*item.classList = 'o disabled';*/
        item.classList.add('o', 'disabled');
        if (checkWin(o)) {
          winMessage(o);
          done = true;
        }
      } else if (turn % 2 === 1) {
        /*基數,"===“指定*/
        item.textContent = 'X';
        item.classList.add('x', 'disabled');
        if (checkWin(x)) {
          winMessage(x);
          done = true;
        }
      }

      /*每走一步就+1*/
      if (!done && turn < 8) {
        turn++;
      } else if (!done && turn >= 8) {
        /*若走完還沒結束就是tie*/
        alert('tie');
      }
    }
  });
});

//當'click'後,交給reset function
resetBtn.addEventListener('click', reset);
