const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// exercicio 1

// const modifyLesson = (lesson) => {
//   lesson.turno = 'noite';
//   return lesson;
// }
// console.log(modifyLesson(lesson2));

// exercicio 2

// const returnKeys = (objeto) => {
//   const chaves = Object.keys(objeto);
//   for (keys in chaves) {
//     console.log(chaves[keys]);
//   }
// }
// returnKeys(lesson3)

// exercicio 3

// const objectSize = (objeto) => {
//   const chaves = Object.keys(objeto);
//   console.log(chaves.length);
// }
// objectSize(lesson3)

// exercicio 4

const returnValues = (objeto) => {
  const chaves = Object.keys(objeto);
  for (keys in chaves) {
    console.log(objeto[chaves[keys]]);
  }
}
returnValues(lesson3)