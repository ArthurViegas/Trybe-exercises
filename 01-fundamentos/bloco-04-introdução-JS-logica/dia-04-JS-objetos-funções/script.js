let personagem1 = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

// exercicio 1
//   console.log('Bem vinda, ' + personagem1.personagem);

// exercicio 2
personagem1['recorrente']= 'sim';


// exercicio 3
// for(let key in personagem1){
//     console.log(key);
// }

// exercicio 4
// for(let key in porsonagem1){
//     console.log(info[key]);
// }

// exercicio 5
let personagem2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'sim'
}
console.log(personagem1.personagem + ' e ' + personagem2.personagem);
console.log(personagem1.origem + ' e ' + personagem2.origem);
console.log(personagem1.nota + ' e ' + personagem2.nota);
console.log('Ambos recorrentes');