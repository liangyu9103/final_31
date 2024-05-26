//url可擺在local或遠端
//const url = './api/data_31.json';

/*從supabase資料庫抓資料*/
import { _supabase } from './clientSupabase_31.js';

let menu = [];

//找到section-center的位置
const sectionCenter = document.querySelector('.section-center');
const btnContainer = document.querySelector('.btn-container');

const fetchData = async () => {
  try {
    let { data, error } = await _supabase.from('menu_31').select('*');

    console.log('fetch', data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

//menu.map((item):轉成陣列把每一個item走一遍
const displayMenuItems = (menuItems) => {
  let displayMenu = menuItems
    .map((item) => {
      //解構,下面取代才能寫成${}
      const { id, title, category, price, remote_img, descrip } = item;
      //return index的東西
      return `
        <article class="menu-item">
          <img
            src=${remote_img}
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
              ${descrip}
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

//dom讀進來後,呼叫一個程式; call back fn:() => {}:資料抓回來之後通知
window.addEventListener('DOMContentLoaded', async () => {
  menu = await fetchData();
  displayMenuItems(menu);
  displayMenuButtons();
  //displayMenuButtons(category);
});
