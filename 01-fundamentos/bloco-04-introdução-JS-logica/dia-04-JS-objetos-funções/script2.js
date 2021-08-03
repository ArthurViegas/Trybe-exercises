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

let arrayTeste = [12, 4, 6, 7, 10, 1, 23, -2];

function indiceMenorValor(array){
    // let valoresAnalisados=[];
    let indice=0;
    for (let i = 0; i < array.length; i+=1) {
          if(array[i] < array.length){
            menorValor = array[i];
            indice = i;
            // valoresAnalisados.push(array[i])  
        
        }
        
    }
//    console.log(valoresAnalisados);
   console.log(indice);

}

indiceMenorValor(arrayTeste)