const calcule = require('./exercicio1')
const randon = Math.floor(Math.random() * 100 + 1)

calcule(randon, randon, randon)
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))