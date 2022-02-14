function calcule(a, b, c) {
  return new Promise((resolve, reject) => {
    const result = (a + b) * c;
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
      reject('Informe apenas números');
    }
      if(result < 50) {
      reject('Valor muito baixo')
    }
    resolve(result)
  })
}

// calcule(10, 10, 2)
//   .then(resolve => console.log(resolve))
//   .catch(error => console.log(error))

// calcule(10, 10, 'a')
//   .then(resolve => console.log(resolve))
//   .catch(error => console.log(error))

// calcule(100, 100, 2)
//   .then(resolve => console.log(resolve))
//   .catch(error => console.log(error))


module.exports = calcule;