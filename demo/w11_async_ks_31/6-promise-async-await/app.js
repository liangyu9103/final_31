const heading1 = document.querySelector('.one');
const heading2 = document.querySelector('.two');
const heading3 = document.querySelector('.three');
const heading4 = document.querySelector('.four');

const btn = document.querySelector('.btn');

/*--async.await非同步--*/
btn.addEventListener('click', async () => {
  const result = await displayColor();
  console.log('result', result);
});

/*await做完才會做下一行*/
/*成功在try做，失敗在catch做*/
const displayColor = async () => {
  try {
    await addColor(1000, heading1, 'red');
    await addColor(2000, heading2, 'green');
    await addColor(1000, heading3, 'blue');
    await addColor(500, heading4, 'purple');
  } catch (error) {
    console.log(error);
  }
};

/*--Promise非同步寫法--*/
// btn.addEventListener('click', () => {
//   /*成功擺在then裡面，失敗擺在catch裡 */
//   addColor(1000, heading1, 'red')
//     .then(() => {
//       /*成功的話要return到下一個then */
//       return addColor(2000, heading2, 'green');
//     })
//     .then(() => {
//       return addColor(1000, heading3, 'blue');
//     })
//     .then(() => {
//       return addColor(500, heading4, 'purple');
//     })
//     .catch((error) => console.log(error));
// });

const addColor = (time, element, color) => {
  /*Promise非同步，不是成功就是失敗 */
  /*成功透過resolve回傳，失敗透過reject回傳*/
  return new Promise((resolve, reject) => {
    if (element) {
      setTimeout(() => {
        element.style.color = color;
        resolve();
      }, time);
    } else {
      reject(new Error(`There is no such element ${element}`));
    }
  });
};

// btn.addEventListener('click', () => {
//   setTimeout(() => {
//     heading1.style.color = 'red';
//     setTimeout(() => {
//       heading2.style.color = 'green';
//     }, 2000);
//   }, 1000);
// });
