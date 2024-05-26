//�qdata_31.js�פJimport sdata,students���
import { sdata, students } from './data_31.js';

console.log('sdata original', sdata);
console.log('students', students);

sdata.sort();
//alphabetically:�Ѧr���Ƨ�
console.log('sdata after sorting alphabetically', sdata);

//b-a�Ѥj��p�Ƨ�
sdata.sort(function (a, b) {
  return b - a;
});
//descending:�ѼƦr�Ƨ�
console.log('sdata after sorting descending', sdata);
console.log(`The highest score: ${sdata[0]}`);
console.log(`The lowest score: ${sdata[sdata.length - 1]}`);

//map:function�̨C��student�����@�M�A�ন�t�@��function
//�bstudent2�}�C�̭��A�[�Jstudent�}�C���F��A�A�t�~�s�Wrole��students2�}�C
const students2 = students.map((student) => {
  return { ...student, role: 'student' };
});

students2.sort(function (a, b) {
  return b.score - a.score;
});

//�L�X�̤j���Z
console.log('students2 sorted descending', students2);
console.log(`The highest score: ${students2[0].score}`);
console.log(`The lowest score: ${students2[students2.length - 1].score}`);
