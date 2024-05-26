const btn = document.querySelector('.btn');
const url = './api/people.json';

/*click後執行getData */
btn.addEventListener('click', () => {
  /*get url的資料 */
  fetchDataAsync(url);
});

const fetchDataAsync = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log('data', data);
    displayItem(data);
  } catch (err) {
    console.log(err);
  }
};

function fetchData(url) {
  /*======promise架構======*/
  fetch(url)
    /*response.json()抓到response裡面的data陣列資料 */
    /*回傳response的資料 */
    .then((response) => response.json())
    /*回傳json的data */
    .then((data) => {
      console.log('data', data);
      /*把data送到displayItem function來處理*/
      displayItem(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

function displayItem(data) {
  const displayData = data
    .map((item) => {
      return `
      <p>${item.name}</p>
      `;
    })
    .join('');
  /*產生一個div把資料塞在裡面 */
  const element = document.createElement('div');
  element.innerHTML = displayData;
  document.body.appendChild(element);
}

function getData() {
  /* http xhr寫法 */
  const xhr = new XMLHttpRequest();
  console.log('xhr0', xhr);
  /*GET取資料,傳到url裡面*/
  xhr.open('GET', url);
  console.log('xhr', xhr);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log('xhr', xhr);
      /*------------------處理資料成字串過程-------------------- */
      /*轉成字串*/
      const data = JSON.parse(xhr.responseText);
      const displayData = data
        .map((item) => {
          return `
      <p>${item.name}</p>
      `;
        })
        .join('');
      /*產生一個div把資料塞在裡面 */
      const element = document.createElement('div');
      element.innerHTML = displayData;
      document.body.appendChild(element);
    } else {
      console.log({
        status: xhr.status,
        text: xhr.statusText,
      });
    }
  };
  xhr.send();
}
