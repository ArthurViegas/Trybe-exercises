const getUserName = require('../exercise2')

test('Testa se ao passar o parametro "1" retorna o usuario "Mark"', () => (
  getUserName(1).then((user) => {
    expect(user).toEqual('Mark')
  })
))

test('Testa se ao passar o parametro "3" retorna um erro', () => {
  expect.assertions(1);
  return getUserName(3).catch((error) => 
  expect(error.message).toMatch('User with 3 not found.')
)})