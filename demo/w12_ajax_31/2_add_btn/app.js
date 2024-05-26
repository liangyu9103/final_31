const btn = document.querySelector('.btn');

/*click後執行getData */
btn.addEventListener('click', () => {
  getData();
});

function getData() {
  /* http寫法 */
  const xhr = new XMLHttpRequest();
  console.log('xhr0', xhr);
  /*GET取資料,sample.txt顯示在responText裡面*/
  xhr.open('GET', './api/sample.txt');
  console.log('xhr', xhr);
  xhr.onreadystatechange = function () {
    console.log('xhr', xhr);
    if (xhr.readyState === 4 && xhr.status === 200) {
      /* 於前端創建段落p */
      const text = document.createElement('p');
      /*將XHR回應的內容設置為剛建立的段落元素的文本內容*/
      text.textContent = xhr.responseText;
      /*在html內的body中加入sample.txt內容,並顯示在前端 */
      document.body.appendChild(text);
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
