const readlineSync = require('readline-sync');

const peso = readlineSync.questionFloat('Qual seu peso?')
const altura = readlineSync.questionInt('Qual sua altura?')

const  imc = (peso, altura) => peso / Math.pow(altura / 100, 2).toFixed(2);


console.log(imc(peso, altura));