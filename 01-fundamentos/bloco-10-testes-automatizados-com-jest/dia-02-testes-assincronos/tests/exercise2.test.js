const getUserName = require('../exercise2')

test('Testa se ao passar o parametro "1" retorna o usuario "Mark"', () => (
  getUserName(1).then((user) => {
    expect(user).toEqual('Mark')
  })
))