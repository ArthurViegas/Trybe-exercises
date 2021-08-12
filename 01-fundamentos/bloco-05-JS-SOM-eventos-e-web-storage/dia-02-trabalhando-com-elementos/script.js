// 1
document.getElementById('elementoOndeVoceEsta')
// 2
let variavel1 = document.getElementById('elementoOndeVoceEsta').parentNode
variavel1.style.backgroundColor = 'red'
// 3
let variavel2 = document.getElementById('primeiroFilhoDoFilho')
variavel2.innerText = 'qualquer texto'
// 4
let variavel3 = document.getElementById('pai').firstElementChild
console.log(variavel3);
// 5
let variavel4 = document.getElementById('elementoOndeVoceEsta').previousElementSibling
console.log(variavel4);
//6
let variavel5 = document.getElementById('elementoOndeVoceEsta').nextSibling
console.log(variavel5);
//7
let variavel6 = document.getElementById('elementoOndeVoceEsta').nextElementSibling
console.log(variavel6);
// 8
let variavel7 = document.getElementById('pai').lastElementChild.previousElementSibling
console.log(variavel7);

//
let sectionOndeEstou = document.getElementById('elementoOndeVoceEsta')
let sectionBrother = document.createElement('h1')
    sectionBrother.innerText = ('lalalalala')
document.sectionOndeEstou.appendChild(sectionBrother)