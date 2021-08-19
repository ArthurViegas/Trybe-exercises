window.onload = function(){

function statesOptions(){
  let brazilianStates = ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO']

  for (let i = 0; i < brazilianStates.length; i += 1) {
    let state = brazilianStates[i];

    let option = document.createElement('option')
        option.value = state;
        option.innerText = state;

    let select = document.querySelector('#input-state')

        select.appendChild(option)
  }
}
  statesOptions()
}
