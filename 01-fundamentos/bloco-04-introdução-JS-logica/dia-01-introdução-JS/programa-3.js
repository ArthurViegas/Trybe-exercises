let a = 10;
let b = 20;
let c = 30;

if (a > b && a > c){
    console.log('a = ' + a + ' é o maior dos 3 numeros');
}else if (b > a && b > c){
    console.log('b = ' + b + ' é o maior dos 3 numeros')
}else{
    console.log('c = ' + c + ' é o maior dos 3 numeros')
}

// nesse caso o console deve apresentar 'c = 30 é o maior dos 3 numeros'