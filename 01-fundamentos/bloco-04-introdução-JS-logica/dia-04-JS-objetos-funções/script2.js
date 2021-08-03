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

let arrayTeste = [2, 43, 6, 17, 10, 31];

function maiorIndice(valor){
    let maiorValor = 0;
    let indice = 0;
    for (let i = 0; i < valor.length  ; i+=1){
        if (valor[i] > maiorValor) {
            maiorValor = valor[i]
            indice = i;
        }  
    } 
    return indice;
}
console.log(maiorIndice(arrayTeste));


// let array1 = [2, 10, 3, 53, 23, 75, 19, 28, 4, 5];

// function maiorIndiceArray(array){
//     let maiorValor = 0;
//     let indiceMaiorValor = 0;

//     for(let i = 0; i < array.length; i+=1){
//         if(array[i] > maiorValor){
//           maiorValor = array[i];
//             indiceMaiorValor = i;
//         }
//     }
//     return indiceMaiorValor;
// }
// console.log(maiorIndiceArray(array1));