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

// const modifyLesson = (lesson) => lesson.turno = 'noite';
// console.log(modifyLesson(lesson2));

// exercicio 2

// const returnKeys = (objeto) => Object.keys(objeto)
// console.log(returnKeys(lesson3));

// exercicio 3

// const objectSize = (objeto) => Object.keys(objeto).length
// console.log(objectSize(lesson3));

// exercicio 4

// const returnValues = (objeto) => Object.values(objeto)
// console.log(returnValues(lesson3));

// exercicio 5

// const allLessons = Object.assign({}, {lesson1, lesson2, lesson3})
// console.log(allLessons);

// exercicio 6

// const returnSize = (objeto) => Object.keys(objeto).length;
// console.log(returnSize(allLessons));

// exercicio 7

// const returnValueByNumber = (objeto, numero) => Object.values(objeto)[numero];
// console.log(returnValueByNumber(lesson1, 0));

// exercicio 8

const verifyPair = (objeto, key, value) => {
const arrayObj = Object.entries(objeto);
let isEqual = false;
for (let i in arrayObj){
  if ((arrayObj[i][0] === key) && (arrayObj[i][1] === value)) isEqual = true;
}
return isEqual;
}
console.log(verifyPair(lesson1, 'materia', 'Matemática'));