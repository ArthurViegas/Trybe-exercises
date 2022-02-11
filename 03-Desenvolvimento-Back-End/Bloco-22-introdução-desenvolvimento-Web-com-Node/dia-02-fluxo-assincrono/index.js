function exemplo(a, b, c) {
  return new Promise((resolve, reject) => {
    const result = (a + b) * c;
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') reject('Informe apenas números');
    if(result < 50) {
      reject('Valor muito baixo')
    }
    resolve(result)
  })
}

console.log(exemplo(100, 100, 2));
