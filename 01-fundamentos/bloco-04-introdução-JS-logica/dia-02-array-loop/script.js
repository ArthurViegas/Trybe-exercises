
//  let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//exercicio 1
// for( let i = 0; i < numbers.length; i+=1){
//     console.log(numbers[i])
// }


// exercicio 2
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let soma=0;
// for(let i=0; i<numbers.length;i+=1){
//     soma+=numbers[i];
// }
// console.log(soma);


// exercicio 3
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let soma=0;
// for(let i=0; i<numbers.length;i+=1){
//     soma+=numbers[i];
// }
// console.log(soma/numbers.length);


// exercicio 4
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let soma=0;
// for(let i=0; i<numbers.length;i+=1){
//     soma+=numbers[i];
// }
// let mediaAritmetica= soma/numbers.length;
// if (mediaAritmetica>20){
//     console.log('valor maior que 20');
// }else{
//     console.log('valor menor que 20');
// }


// exercicio 5 
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let maior = numbers.reduce(function(a,b){
//     return Math.max(a,b);
// });
// console.log(maior);


// exercicio 6
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let oddNumbers=0;

// for(let i=0;i<numbers.length;i+=1){
//     if((numbers[i]%2) !== 0){
//         oddNumbers++;
        
//     }
// }
// console.log(oddNumbers);


// exercicio 7
 
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27, 1];
// let menor = numbers.reduce(function(a,b){
//     return Math.min(a,b);
// });
// console.log(menor);


// exercicio 8

// for (let i=1; i<26; i+=1){
//     console.log(i);
// }

// exercicio 9

// for (let i=1; i<26; i+=1){
//     console.log(i/2);
// }

// BONUS

// exercicio 1

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let ordenedNumbers = 0;
// for(let i=1;i<numbers.length;i+=1){
//     for(let x=0;x<i;x+=1){
//         if(numbers[i]<numbers[x]){
//             let position = numbers[i];
//             numbers[i] = numbers[x];
//             numbers[x] = position;
            
//         }
//     }
 
// }
// console.log(numbers)

// exercicio 2

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// for(let i=1;i<numbers.length;i+=1){
//     for(let x=0;x<i;x+=1){
//         if(numbers[i]>numbers[x]){
//             let position = numbers[i];
//             numbers[i] = numbers[x];
//             numbers[x] = position;
//         }
//     }
// }
// console.log(numbers);

// exercicio 3
// 1 for partindo de 1 pra percorrer array
// 2 segundo for partindo de 0 
// 3 console.log numbers[x] * numbers[i];

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersMultNumbers = [];

for(let i=1;i<numbers.length;i+=1){
   if( i === numbers.length -1){
       numbers.push(numbers[i] * 2);
       break
   }
    
    }

console.log(numbersMultNumbers)

