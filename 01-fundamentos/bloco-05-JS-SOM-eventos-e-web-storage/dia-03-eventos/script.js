
let body = document.body
const firstLi = document.getElementById('firstLi');
const secondLi = document.getElementById('secondLi');
const thirdLi = document.getElementById('thirdLi');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');
const botton = document.getElementById('button');

firstLi.addEventListener('click', adicionaClassTech);
secondLi.addEventListener('click', adicionaClassTech);
thirdLi.addEventListener('click', adicionaClassTech);

//input.addEventListener('keyup', changeBoxText)

myWebpage.addEventListener('dblclick', redirectToPortfolio)
myWebpage.addEventListener('mouseover', colorChangeGreen)
myWebpage.addEventListener('mouseleave', colorChangeWhite)

button.addEventListener('click', submitButton)

function adicionaClassTech(parametro){
    let li = parametro.target;
    if(li.id === 'firstLi'){
        firstLi.classList.add('tech');
        secondLi.classList.remove('tech');
        thirdLi.classList.remove('tech');
    }
    if(li.id === 'secondLi'){
        secondLi.classList.add('tech');
        firstLi.classList.remove('tech');
        thirdLi.classList.remove('tech');
    }
    if(li.id === 'thirdLi'){
        thirdLi.classList.add('tech');
        secondLi.classList.remove('tech');
        firstLi.classList.remove('tech');
    }
    
}
function submitButton (){
    let liTech = document.querySelector('.tech');
    liTech.innerText = input.value;
}
// function changeBoxText(){
//      let liTech = document.querySelector('.tech');
//      liTech.innerText = input.value;
     
// }

function redirectToPortfolio (){
    window.location = 'https://www.linkedin.com/in/viegasarthur/'
}

function colorChangeGreen (){   
     myWebpage.style.color = '#2fc18c'
     myWebpage.style.cursor = 'default'
}
function colorChangeWhite (){
    myWebpage.style.color = 'white'
}
/*a
1 Copie esse arquivo e edite apenas ele;
2 Crie uma função que adicione a classe 'tech' ao elemento selecionado;
2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
3 Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
 com a classe 'tech';
4 Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
redirecione para alguma página;
4.1 Que tal redirecionar para seu portifólio?
 Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
a cor do mesmo;

Segue abaixo um exemplo do uso de event.target:
*/


//function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  //event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
//}

//firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.