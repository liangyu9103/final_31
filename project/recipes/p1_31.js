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
  /*把products陣列用map轉到另外一個productsContent陣列*/
  let productsContent = products
    .map((product) => {
      const { title, description, localImg } = product;
      //const { id } = product;
      return `
    <div class="single-product">
    <img
      src=${localImg}
      class="single-product-img img"
      alt=${title}
    />
    <footer>
      <h3 class="name">${title}</h3>
      <span class="price">${description}</span>
    </footer>
    <div class="recipes-detail"><button class="recipes-detail-btn">詳細資訊</button></div>
  </div>
    `;
    }) /*join把陣列為自串起來然後顯示 */
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

/*async:非同步 */
document.addEventListener('DOMContentLoaded', async () => {
  /*先抓資料getProductsSupabase，await後再product_31 */
  products2_31 = await getRecipesSupabase_31();
  /*再繼續往下做 */
  displayProducts(products2_31);
});
