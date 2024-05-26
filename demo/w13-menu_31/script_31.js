//多個匯入需要加大括號,且menu名稱可以改
import category from './btndata_31.js';
import menu from './data_31.js';

//找到section-center的位置
const sectionCenter = document.querySelector('.section-center');
const btnContainer = document.querySelector('.btn-container');
console.log('menu', menu);
//console.log('category', category);

//menu.map((item):轉成陣列把每一個item走一遍
const displayMenuItems = (menuItems) => {
  let displayMenu = menuItems
    .map((item) => {
      //解構,下面取代才能寫成${}
      const { id, title, category, price, img, desc } = item;
      //return index的東西
      return `
        <article class="menu-item">
          <img
            src=${img}
            alt="buttermilk"
            pancakes=""
            class="photo"
          />
          <div class="item-info">
            <header>
              <h4>${title}</h4>
              <h4 class="price">$${price}</h4>
            </header>
            <p class="item-text">
              ${desc}
            </p>
          </div>
        </article>
        `;
    })
    //把陣列資料join起來變字串
    .join('');
  //console.log('displayMenu', displayMenu);
  //把資料插進sectionCenter
  sectionCenter.innerHTML = displayMenu;
};

//回家作業答案
//menu裡面資料map
//把資料return進去
const menuCategories = new Set(
  menu.map((item) => {
    return item.category;
  })
);
//console.log('menuCategories', menuCategories);

const categories = ['all', ...menuCategories];
//console.log('categories', categories);

const displayMenuButtons = () => {
  let menuButtons = categories
    .map((category) => {
      return `
    <button type="button" class="filter-btn" data-id="${category}">${category}</button>
    `;
    })
    .join('');
  //console.log('menuButtons', menuButtons);
  btnContainer.innerHTML = menuButtons;

  const filterBtns = document.querySelectorAll('.filter-btn');
  console.log('filterBtns', filterBtns);
  //forEach:陣列每一個都會做一遍
  //e.currentTarget：滑鼠點到的目標
  filterBtns.forEach((btn) => {
    //click後執行後面function
    btn.addEventListener('click', (e) => {
      console.log('data-id', e.currentTarget.dataset.id);
      const category = e.currentTarget.dataset.id;
      const filterMenu = menu.filter((item) => item.category === category);
      if (category === 'all') {
        displayMenuItems(menu);
      } else {
        displayMenuItems(filterMenu);
      }
    });
  });
};

// //回家作業
// const displayMenuButtons = (category) => {
//   let displayButtons = category
//     .map((btn) => {
//       //const category = ['all', 'breakfast', 'lunch', 'dinner', 'shakes'];
//       const { id, text } = btn;
//       return `
//         <div class="btn-container">
//         <button type="button" class="filter-btn" data-id="all">${text}</button>
//       </div>
//             `;
//     })
//     .join('');
//   console.log('displayButtons', displayButtons);
//   btnContainer.innerHTML = displayButtons;
// };

//dom讀進來後,呼叫一個程式; call back fn:() => {}:資料抓回來之後通知
window.addEventListener('DOMContentLoaded', () => {
  displayMenuItems(menu);
  displayMenuButtons();
  //displayMenuButtons(category);
});
