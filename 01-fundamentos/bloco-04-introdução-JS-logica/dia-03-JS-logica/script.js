//exercicio 1

// let n=5;

// for(let i=0;i<n;i+=1){   
//   let string='';
//     for(let x=0;x<n;x+=1){
//         string+='*';
//     }
//   console.log(string);
// }



// exercicio 2
// let n=5;

// for(let i=0;i<=n;i+=1){  
//   let string=''; 
//     for(let x=0;x<i;x+=1){
//         string+='*';
//     }
//     console.log(string);
// }



// exercicio 3

let n = 5; //variável 1
for (let i = 1; i <= n; i++) {
  let string = ""; //criando um contador
  for (let j = 0; j < n - i; j++) { //criando o segundo
    string += " ";
  }   
for (let k = 0; k < i; k++) {
  string += "*";
}
console.log(string); 
}


