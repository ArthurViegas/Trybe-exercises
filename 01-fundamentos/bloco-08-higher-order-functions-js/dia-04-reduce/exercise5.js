const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

// function containsA() {
//   const recuperaLetra = names.reduce((acc, obj, index) => {
//       return acc + obj
//   })
//   const contador = recuperaLetra.reduce((acc, obj, index) => (
    
//   ))
//   // return recuperaLetra
// }
// console.log(containsA());
// assert.deepStrictEqual(containsA(), 20);

const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const patientInfo = [60, 1.7];

console.log(imc(...patientInfo)); // 20.76