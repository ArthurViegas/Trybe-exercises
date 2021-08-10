// exercicio 1

// let palavra = 'arara'

// function verificaPalindrome(){
//     function reverse(s) {
//     return s.split('').reverse().join('');
// }

// if (palavra === reverse(palavra)){
//     return true;
// }else{
//     return false;
// }
// }
// console.log(verificaPalindrome(palavra));


// exercicio 2 inacabado

// let arrayTeste = [2, 3, 6, 7, 10, 1];

// function indiceMaiorValor(valor){
//     let maiorValor = 0;
//     let indice = 0;
//     for (let i = 0; i < valor.length  ; i+=1){
//         if (valor[i] > maiorValor) {
//             maiorValor = valor[i]
//             indice = i;
//         }  
//     } 
//     return indice;
// }
// console.log indiceMaiorValor(arrayTeste));


// exercicio 3

// let arrayTeste = [12, 4, 6, 7, 10, 1, 23, -2];

// function indiceMenorValor(array){
//     // let valoresAnalisados=[];
//     let indice=0;
//     for (let i = 0; i < array.length; i+=1) {
//           if(array[i] < array.length){
//             menorValor = array[i];
//             indice = i;
//             // valoresAnalisados.push(array[i])  
        
//         }
        
//     }
// //    console.log(valoresAnalisados);
//    console.log(indice);

// }

// indiceMenorValor(arrayTeste)

// exercicio 4

// let arrayTeste = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; 
// function nomeComMaisCaracteres(array){
//     let maior = '';
//     for(let key in array){
//         if(array[key].length > maior.length)
//         maior = array[key]
//         }
//     return maior;
// }
// console.log(nomeComMaisCaracteres(arrayTeste));


// exercicio 5
// varrer a array --- loop for
// separar numeros que se repetem --- if [i] === array.length  
// retornar seu valor

// let arrayTeste = [2, 3, 2, 5, 8, 2, 3];
//  function numeroQueRepete(array){
//     let numeroRepetido = 0; 
//     for(let i in array.length){
//          if( array[i] === array.length ){
             
//              numeroRepetido = array[i]
//          }
//      }
//      return numeroRepetido;
//  }

//  console.log(numeroQueRepete(arrayTeste));

// let arrayTeste = [2, 3, 2, 5, 8, 2, 3, 3, 3, 3];
//  function numeroQueRepete(array){
//    // let numeroRepetido = 0; 
//     for(let i=0 ; i < array.length; i++){
//         let contador = array[0];
//         for (let j = 0; j < i ; j++) {
//             if (array[j] === array[i]){
//             contador.push(array[j])
//             }
            
//         }return contador;
//     }
     
//  }

//  console.log(numeroQueRepete(arrayTeste));

var repeated = [];
let vetor = [2, 3, 2, 5, 8, 2, 3];
var aux = vetor.filter(function(elemento, i) {
    if(vetor.indexOf(elemento) !== i) {
        repeated.push(elemento)
    }
    return vetor.indexOf(elemento) == i;
})
