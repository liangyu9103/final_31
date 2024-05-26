//import { products_31, all_products_31 } from './p1_data_31.js';

let products_31 = [];

const url = 'https://www.course-api.com/javascript-store-products';
const productContainer = document.querySelector('.products-container');

//從網路上抓資料，非同步
const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log('fetch data', data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

console.log('products_31', products_31);

const DisplayProducts = (products) => {
  /*把products陣列用map轉到另外一個productsContent陣列*/
  let productsContent = products
    ?.map((product) => {
      const { name, price, image, remote_url } = product.fields;
      //const { id } = product;
      return `
    <div class="single-product">
    <img
      src=${image[0].url}
      class="single-product-img img"
      alt=${name}
    />
    <footer>
      <h3 class="name">${name}</h3>
      <span class="price">$${price}</span>
    </footer>
  </div>
    `;
    }) /*join把陣列為自串起來然後顯示 */
    .join('');
  productContainer.innerHTML = productsContent;
};

//const DisplayProducts = (products) => {};

document.addEventListener('DOMContentLoaded', async () => {
  //fetchData()先撈資料，從api url抓
  products_31 = await fetchData(url);
  DisplayProducts(products_31);
});
