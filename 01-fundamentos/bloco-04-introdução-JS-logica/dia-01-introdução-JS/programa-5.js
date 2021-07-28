let angulo1 = 45;
let angulo2 = 45;
let angulo3 = 90;

if (angulo1 + angulo2 + angulo3 == 180){
    console.log(true)
}else if (angulo1 <= 0 || angulo2 <= 0 || angulo3 <= 0){
    console.log('inválido')
}else{
    console.log(false)
}

//nesse caso o console deve retornar 'true'