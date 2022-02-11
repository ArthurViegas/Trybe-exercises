const calcule = require('./exercicio1')
const randon = () => Math.floor(Math.random() * 100 + 1)

async function doCalcule() {
  const randomNumbers = Array.from({ length: 3 }).map(randon)
  try {
    const request = await calcule(...randomNumbers)
    console.log(request);
  } catch (error) {
    console.log(error);
  }
} 
doCalcule()
