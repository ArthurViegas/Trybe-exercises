
function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  function createMonthDays(){
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;
    

    for (let index = 0; index < dezDaysList.length; index++) {
        let day = dezDaysList[index];
        let dayItem = document.createElement('li');
            dayItem.className = 'day';
            dayItem.innerHTML = day;
        
            
        let weekDays = document.querySelector('#days');
            weekDays.appendChild(dayItem);

            if (day === 24 || day === 25 || day === 31){
                dayItem.classList.add('holiday');
            }
            if (day === 4 || day === 11 || day === 18 || day === 25){
                dayItem.classList.add('friday');
            }
    }
}
createMonthDays();

function buttonFeriado(){
    let local = document.querySelector('.buttons-container');
    let botao = document.createElement('button');
        botao.id = 'btn-holiday';
        botao.innerText = 'Feriados';
        botao.style.cursor = 'pointer'

        local.appendChild(botao);
}
buttonFeriado();

function buttonSexta(){
    let local = document.querySelector('.buttons-container');
    let botao = document.createElement('button');
        botao.id = 'btn-friday';
        botao.innerText = 'Sexta';
        botao.style.cursor = 'pointer'
        local.appendChild(botao);
}
buttonSexta();

function highlightHolidays(){
  
   let holidays = document.querySelectorAll('.holiday');

        for (let i = 0; i < holidays.length; i += 1) {
            if(holidays[i].style.backgroundColor === 'white'){
                holidays[i].style.backgroundColor = 'rgb(238,238,238)';
            }else{
                holidays[i].style.backgroundColor = 'white';
            }
            
        }
}
function changeFridays(){

     let friday = document.querySelectorAll('.friday');
     let fridayDays = [4,11,18,25];
  
          for (let i = 0; i < friday.length; i += 1) {
            if (friday[i].innerText !== 'sexta-feira'){
                friday[i].innerText = 'sexta-feira';
             } else {
                friday[i].innerText = fridayDays[i];
            }
          }
  }
function daysZoomIn(){
    let days = document.querySelector('#days');
    
    days.addEventListener('mouseover', function(event){
        event.target.style.fontSize = '30px';
        event.target.style.fontWeight = '600';
    })
    days.style.cursor = 'default'
};
function daysZoomOut(){
    let days = document.querySelector('#days');
    
    days.addEventListener('mouseout', function(event){
        event.target.style.fontSize = '20px';
        event.target.style.fontWeight = '200';
    })
} 
daysZoomIn()
daysZoomOut()

function myTasks(task){  
    let tasksContainer = document.querySelector('.my-tasks')
    let tasks = document.createElement('span');
        tasks.innerText = task;    
        tasksContainer.appendChild(tasks)
}
function submitTaskButton(){
    let task = input.value + '\n';
    myTasks(task)
    addButton.addEventListener('click',function(event){
       input.value = '';
       //console.log('funcionou', input ,event);
    }) 
}
function submitTaskColor(cor){
    let tasksContainer = document.querySelector('.my-tasks');
    let task = document.createElement('div');
        task.className = 'task';
        task.style.backgroundColor = input.value;
        tasksContainer.appendChild(task);
}
function taskColorButton(){
    let cor = input.value;
    submitTaskColor(cor)

    addColorButton.addEventListener('click',function(event){
        input.value = '';
        //console.log('funcionou', input ,event);
     })
    
}




let input = document.querySelector('#task-input');
let botaoFeriado = document.querySelector('#btn-holiday');
let botaoSexta = document.querySelector('#btn-friday');
let addButton = document.querySelector('#btn-add');
let addColorButton = document.querySelector('#btn-add-cor')

addColorButton.addEventListener('click', taskColorButton)
addButton.addEventListener('click', submitTaskButton) 
botaoFeriado.addEventListener('click', highlightHolidays);
botaoSexta.addEventListener('click', changeFridays );
