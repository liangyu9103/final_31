function showdemo(week) {
  const p = document.querySelector('.show-classdemo');
  console.log('p', p);
  switch (week) {
    case 'w1':
      p.innerHTML = `<iframe src="./demo/w01-demo_31/index.html" width="100%" height="100%" />`;
      break;
    case 'w2':
      p.innerHTML = `<iframe src="./demo/w02-tictatoe_31/tictatoe_31.html" width="100%" height="100%" />`;
      break;
    case 'w3-p1':
      p.innerHTML = `<iframe src="./demo/w03-basic_31/p1_31/p1_31.html" width="100%" height="100%" />`;
      break;
    case 'w3-p2':
      p.innerHTML = `<iframe src="./demo/w03-basic_31/p2_31/p2_31.html" width="100%" height="100%" />`;
      break;
    case 'w3-p3':
      p.innerHTML = `<iframe src="./demo/w03-basic_31/p3_31/p3_31.html" width="100%" height="100%" />`;
      break;
    case 'w4-p4':
      p.innerHTML = `<iframe src="./demo/w04-basic_31/p4_31/p4_31.html" width="100%" height="100%" />`;
      break;
    case 'w4-p5':
      p.innerHTML = `<iframe src="./demo/w04-basic_31/p5_31/p5_31.html" width="100%" height="100%" />`;
      break;
    case 'w4-p6':
      p.innerHTML = `<iframe src="./demo/w04-basic_31/p6_31/p6_31.html" width="100%" height="100%" />`;
      break;
    case 'w5':
      p.innerHTML = `<iframe src="./demo/w05-menu_31/index.html" width="100%" height="100%"  />`;
      break;
    case 'w6-modal':
      p.innerHTML = `<iframe src="./demo/w06_modal_31/index.html" width="100%" height="100%"  />`;
      break;
    case 'w6-menu':
      p.innerHTML = `<iframe src="./demo/w06-menu_31/index.html" width="100%" height="100%"  />`;
      break;
    case 'mid21-p1_31':
      p.innerHTML = `<iframe src="./exams/w09/mid21_31/p1_31/p1_31.html" width="100%" height="100%"  />`;
      break;
    case 'mid21-p2_31':
      p.innerHTML = `<iframe src="./exams/w09/mid21_31/p2_31/p2_31.html" width="100%" height="100%"  />`;
      break;
    case 'mid21-p3_31':
      p.innerHTML = `<iframe src="./exams/w09/mid21_31/p3_xx/p3_31.html" width="100%" height="100%"  />`;
      break;
    case 'recipes':
      p.innerHTML = `<iframe src="./project/recipes/recipes_31.html" width="100%" height="100%"  />`;
      break;
  }
}
