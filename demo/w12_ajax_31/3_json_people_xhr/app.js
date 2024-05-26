const btn = document.querySelector('.btn');
const url = './api/people.json';

/*click後執行getData */
btn.addEventListener('click', () => {
  /*get url的資料 */
  getData(url);
});

function getData() {
  /* http寫法 */
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
console.log('hello');
