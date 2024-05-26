/*const,let�ŧi�ܼƮ�,�n��b�̥~��,����bfunction��*/
/*�wconst(�`��)��Ƥ����*/
const o = 'o';
const x = 'x';
/*�wlet(�ܼ�)��ƥi�H���*/
let turn = 0;
let done = false;

/*querySelectorAll��ܾ�*/
const container = document.querySelector('#container');

/*querySelectorAll���o�Ҧ�,'css��ܾ�'*/
const allLi = document.querySelectorAll('#board li');
const resetBtn = document.querySelector('#reset');

console.log('container', container);
console.log('allLi', allLi);
console.log('restBtn', resetBtn);

/*reset Arrow function: "const x = () => {}" */
const reset = () => {
  /*�Ireset,class�|�ܪŭ�
  allLi[0].classList = '';
  �Ireset�|�ܦ^�ϸ��A���ܤ�r���e
  allLi[0].textContent = '+';
  allLi[4].classList = '';
  allLi[4].textContent = '+'; */

  /*item�C�@�ӭ�[0]~[8]*/
  allLi.forEach((item) => {
    item.classList = '';
    item.textContent = '+';
  });

  //css�h�L�ӭn�h����-"�Ÿ�,�ĤG�Ӧr�}�Y�ܤj�g
  container.style.backgroundColor = '#666';
  turn = 0;
  done = false;
};

const checkWin = (player) => {
  /*p�O�@�Ӱ}�C*/
  let p = [];
  allLi.forEach((item) => {
    p.push(item.classList.contains(player));
  });
  /*���ȬOx�٬Oo,true or false*/
  console.log('p', p);
  /*0��p1���N,1��p2���N....*/
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
    /*return true��checkWin */
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
  /*�ʱ��C�@��item*/
  item.addEventListener('click', () => {
    if (item.classList.contains('disabled')) {
      alert('already filled');
    } else {
      if (turn % 2 === 0) {
        /*����,"===�����w*/
        item.textContent = 'O';
        /*item.classList = 'o disabled';*/
        item.classList.add('o', 'disabled');
        if (checkWin(o)) {
          winMessage(o);
          done = true;
        }
      } else if (turn % 2 === 1) {
        /*���,"===�����w*/
        item.textContent = 'X';
        item.classList.add('x', 'disabled');
        if (checkWin(x)) {
          winMessage(x);
          done = true;
        }
      }

      /*�C���@�B�N+1*/
      if (!done && turn < 8) {
        turn++;
      } else if (!done && turn >= 8) {
        /*�Y�����٨S�����N�Otie*/
        alert('tie');
      }
    }
  });
});

//��'click'��,�浹reset function
resetBtn.addEventListener('click', reset);
