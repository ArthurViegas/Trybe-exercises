var peçasDeXadrez = ['peão', 'PEÃO', 'torre', 'cavalo', 'bispo', 'rainha', 'rei'];

peão = PEÃO = 'O peão movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo.';
torre =  TORRE ='A torre movimenta-se pela vertical ou horizontal, mas não pode pular outras peças.';
cavalo = CAVALO ='É a única peça que pode pular as outras. O movimento do cavalo é em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa.';
bispo = BISPO ='O bispo move-se ao longo da diagonal. Não pode pular outras peças.';
rainha = RAINHA ='A rainha move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.';
rei = REI='O rei pode mover-se em todas as direções (horizontal, vertical e diagonal) somente uma casa de cada vez.';

console.log(PEÃO);
console.log(torre);
console.log(cavalo);
console.log(bispo);
console.log(RAINHA);
console.log(rei);

//nesse caso o console ira retornar uma linha para cada peça.