// import { products_31, all_products_31 } from './p1_data_31.js';
import { _supabase } from './recipesSupabase_31.js';

const productContainer = document.querySelector('.products-container');

// console.log('products_31', products_31);

//console.log('_supabase', _supabase);

let products2_31 = [];

const getRecipesSupabase_31 = async () => {
  try {
    let { data, error } = await _supabase.from('recipes_31').select('*');
    console.log('products data', data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const displayProducts = (products) => {
  let productsContent = products
    .map((product) => {
      const { title, description, localimg } = product;
      //const { id } = product;
      return `
    <div class="single-product">
    <img
      src=${localimg}
      class="single-product-img img"
      alt=${title}
    />
    <footer class="card-footer">
      <h3 class="name">${title}</h3>
      <span class="price">${description}</span>
      <div class="recipes-detail"><button class="recipes-detail-btn">詳細資訊</button></div>
    </footer>
  </div>
    `;
    })
    .join('');
  productContainer.innerHTML = productsContent;
};

// const DisplayProducts = (products) => {
//   let displayMenu = products
//     .map((item) => {
//       const { id, title, category, price, img, desc } = item;
//       return `
//     <div class="single-product">
//     <img
//       src=${img}
//       class="single-product-img img"
//       alt="high-back bench"
//     />
//     <footer>
//       <h3 class="name">${title}</h3>
//       <span class="price">$${price}</span>
//     </footer>
//   </div>
//       `;
//     })
//     .join('');
//   productContainer.innerHTML = displayMenu;
// };

// document.addEventListener('DOMContentLoaded', () => {
//   DisplayProducts(products_31);
// });

// function clickTab(target) {
//   switch (target) {
//     case 'recipes-intro':
//       document.querySelector('#recipes-intro').style.color = '#a62b00';
//       document.querySelector('#recipes-detail').style.color = 'rgb(75 0 4)';
//       break;
//     case 'recipes-detail':
//       document.querySelector('#recipes-intro').style.color = 'rgb(75 0 4)';
//       document.querySelector('#recipes-detail').style.color = '#a62b00';
//       break;
//   }
// }

document.addEventListener('DOMContentLoaded', async () => {
  products2_31 = await getRecipesSupabase_31();
  displayProducts(products2_31);
  // const introTab = document.getElementById('recipes-intro');
  // introTab.addEventListener('click', clickTab('recipes-intro'));
  // const detailTab = document.getElementById('recipes-detail');
  // detailTab.addEventListener('click', clickTab('recipes-detail'));
});

// document.addEventListener('DOMContentLoaded', () => {
//   const button = document.getElementById('greetButton');
//   button.addEventListener('click', handleClick);
// });
