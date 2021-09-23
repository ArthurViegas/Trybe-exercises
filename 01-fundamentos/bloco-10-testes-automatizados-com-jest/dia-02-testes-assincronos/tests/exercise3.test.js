const getUserName = require('../exercise2')

describe('Efetua testes por async/await', () => {
  describe('efetua caso de resolve', () => {
    test('Testa se ao passar o parametro "1" retorna "Mark"', async () => {
      const response = await getUserName(1)
      expect(response).toEqual('Mark')
    })
  })
  describe('efetua caso de reject', () => {
    test('Testa se ao passar o parametro "3" retorna um erro', async () => {
      try {
        await getUserName(3)
      } catch (error) {
        expect(error.message).toEqual('User with 3 not found.')
      }
    })
  })
})
