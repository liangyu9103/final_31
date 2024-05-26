//從data_31.js匯入import sdata,students資料
import { sdata, students } from './data_31.js';

console.log('sdata original', sdata);
console.log('students', students);

sdata.sort();
//alphabetically:由字母排序
console.log('sdata after sorting alphabetically', sdata);

//b-a由大到小排序
sdata.sort(function (a, b) {
  return b - a;
});
//descending:由數字排序
console.log('sdata after sorting descending', sdata);
console.log(`The highest score: ${sdata[0]}`);
console.log(`The lowest score: ${sdata[sdata.length - 1]}`);

//map:function裡每個student都走一遍，轉成另一個function
//在student2陣列裡面，加入student陣列的東西，再另外新增role到students2陣列
const students2 = students.map((student) => {
  return { ...student, role: 'student' };
});

students2.sort(function (a, b) {
  return b.score - a.score;
});

//印出最大成績
console.log('students2 sorted descending', students2);
console.log(`The highest score: ${students2[0].score}`);
console.log(`The lowest score: ${students2[students2.length - 1].score}`);
