var peçasDeXadrez = ['peão', 'torre', 'cavalo', 'bispo', 'rainha', 'rei'];
peão = 'O peão movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo.';
torre ='A torre movimenta-se pela vertical ou horizontal, mas não pode pular outras peças.';
cavalo = 'É a única peça que pode pular as outras. O movimento do cavalo é em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa.';
bispo ='O bispo move-se ao longo da diagonal. Não pode pular outras peças.';
rainha ='A rainha move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.';
rei ='O rei pode mover-se em todas as direções (horizontal, vertical e diagonal) somente uma casa de cada vez.';
let peça= 'peão';

if (peça == 'peão'){
    console.log(peão);
}else if(peça =='torre'){
    console.log(torre);
}else if(peça =='cavalo'){
    console.log(cavalo);
}else if(peça =='bispo'){
    console.log(bispo);
}else if(peça =='rainha'){
    console.log(rainha);
}else if(peça == 'rei'){
    console.log(rei);
}else{
    console.log('Isso não é uma peça de xadrez!')
}




//nesse caso o console ira retornar uma linha para cada peça.