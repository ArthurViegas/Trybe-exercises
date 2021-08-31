// exercise 1
const teste = escopo => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

teste(true);

// exercise 2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const returnArray = () =>{
const teste = `Os numers ${oddsAndEvens.sort()} se encontram ordenados de forma crescente!`
return teste
}
// Seu código aqui.

console.log(returnArray()); // será necessário alterar essa linha 😉