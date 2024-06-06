// import { products_31, all_products_31 } from './p1_data_31.js';
import { _supabase } from './recipesSupabase_31.js';

const productContainer = document.querySelector('.products-container');
const recipesContainer = document.querySelector('#recipes-detail');

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

function showModal(id) {
  console.log(id);
  console.log('test');
  if (!id) return;
  document.getElementById(id).style.display = 'unset';
}

function closeModal(id) {
  if (!id) return;
  document.getElementById(id).style.display = 'none';
}

const displayProducts = (products) => {
  // 料理簡介
  let introContent = products
    .map((product) => {
      const { title, description, localimg, id } = product;
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
        <a href="#">
          <div class="recipes-detail"><button id="${id}-btn" class="recipes-detail-btn">詳細資訊</button></div>
        </a>
      </footer>
    </div>
      `;
    })
    .join('');

  let recipesContent = products
    .map((product) => {
      const {
        id,
        title,
        localimg,
        ingredients,
        step1,
        step2,
        step3,
        step4,
        step5,
      } = product;
      return `
        <div id=${id} class="modal hidden">
          <div class="recipes-detail-card">
            <div class="recipes-detail-card-left">
              <h2>${title}</h2>
              <img
                src=${localimg}
                alt=${title}
              />
            </div>
            <div class="recipes-detail-card-right">
              <h2 class="mb-unset">食材：</h2>
              <h4>
                ${ingredients}
              </h4>
              <h2 class="mb-unset">步驟：</h>
              <h4 class="mb-unset">
                ${step1}
              </h4>
              <h4 class="mb-unset">
                ${step2}
              </h4>
              <h4 class="mb-unset">
                ${step3}
              </h4>
              <h4 class="mb-unset">
                ${step4}
              </h4>
              <h4 class="mb-unset">
                ${step5}
              </h4>
              <div style="margin: 0.5rem; text-align: right">
                <button id="${id}-close" class=close-modal-btn>關閉</button>
              </div>
            </div>
          </div>
        </div>
        `;
    })
    .join('');
  productContainer.innerHTML = introContent;
  recipesContainer.innerHTML = recipesContent;
  setTimeout(() => {
    products.map((item) => {
      const { id } = item;
      document
        .getElementById(id + '-btn')
        .addEventListener('click', function () {
          showModal(id);
        });
      document
        .getElementById(id + '-close')
        .addEventListener('click', function () {
          closeModal(id);
        });
    });
  }, 500);
};

document.addEventListener('DOMContentLoaded', async () => {
  products2_31 = await getRecipesSupabase_31();
  displayProducts(products2_31);
  // const detailTab = document.getElementById('recipes-detail');
  // detailTab.addEventListener('click', clickTab('recipes-detail'));
});

// document.addEventListener('DOMContentLoaded', () => {
//   const button = document.getElementById('greetButton');
//   button.addEventListener('click', handleClick);
// });
