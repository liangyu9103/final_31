import { products_31, all_products_31 } from './p1_data_31.js';

const productContainer = document.querySelector('.products-container');

console.log('products_31', products_31);

const DisplayProducts = (products) => {
  let displayMenu = products
    .map((item) => {
      const { id, title, category, price, img, desc } = item;
      return `
    <div class="single-product">
    <img
      src=${img}
      class="single-product-img img"
      alt="high-back bench"
    />
    <footer>
      <h3 class="name">${title}</h3>
      <span class="price">$${price}</span>
    </footer>
  </div>
      `;
    })
    .join('');
  productContainer.innerHTML = displayMenu;
};

document.addEventListener('DOMContentLoaded', () => {
  DisplayProducts(products_31);
});
