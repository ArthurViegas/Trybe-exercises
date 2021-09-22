const uppercase = require('../exercise1')

test('Testa se a função realmente transforma "teste" em "TESTE"', (done) => {
  uppercase('teste', (callback) => {
    try {
      expect(callback).toBe('TESTE')
      done()
    } catch (error) {
      done(error)
    }
  })
})