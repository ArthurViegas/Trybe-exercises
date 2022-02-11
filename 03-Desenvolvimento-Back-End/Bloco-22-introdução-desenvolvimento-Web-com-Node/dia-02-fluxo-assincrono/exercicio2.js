const calcule = require('./exercicio1')
const randon = () => Math.floor(Math.random() * 100 + 1)

// função randomNumbers tirada do gabarito do exercicio
const randomNumbers = Array.from({ length: 3 }).map(randon)

calcule(...randomNumbers)
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))