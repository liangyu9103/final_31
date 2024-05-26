import { tours_31 } from './data_31.js';

console.log('tours_31', tours_31);

const section = document.querySelector('.section-center');

//toursInfo:陣列
//map處理陣列,把陣列裡資料一個一個讀進去
//(tour):每一個變數資料,自己設的
// ``:夾字串,網頁資料
const displayTours_31 = () => {
  const toursInfo = tours_31
    .map((tour) => {
      const { id, info, local_img, name, price } = tour;
      return `
        <article class="single-tour">
        <img src=${local_img} alt=${name}/>
        <footer>
          <div class="tour-info">
            <h4>${name}</h4>
            <h4 class="tour-price">$${price}</h4>
          </div>
          <p>
            ${info}
          <button>read more</button>
          </p>
          <button class="delete-btn">not interested</button>
        </footer>
      </article>
        `;
    })
    .join('');
  //inner一個網頁進來section
  section.innerHTML = toursInfo;
};

//擺進html .section-center
window.addEventListener('DOMContentLoaded', () => {
  displayTours_31();
});
