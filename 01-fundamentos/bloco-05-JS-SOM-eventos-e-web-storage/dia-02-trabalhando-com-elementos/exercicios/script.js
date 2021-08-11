let titleH1 = document.createElement('h1')
    titleH1.innerText = 'Exercício 5.2 - JavaScript DOM'

    document.body.appendChild(titleH1)

let mainTag = document.createElement('main')
    mainTag.className = 'main-content'

    document.body.appendChild(mainTag)

let tagMain = document.getElementsByClassName('main-content');

let sectionTag = document.createElement('section')
    sectionTag.className = 'center-content'
    
mainTag.appendChild(sectionTag)