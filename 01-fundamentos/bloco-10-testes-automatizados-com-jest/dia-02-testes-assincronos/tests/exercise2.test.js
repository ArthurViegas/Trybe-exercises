const getUserName = require('../exercise2')

describe('Efetua os testes por promisses', () => {
  describe('Efetua caso de resolve', () => {
    test('Testa se ao passar o parametro "1" retorna o usuario "Mark"', () => (
      getUserName(1).then((user) => expect(user).toEqual('Mark'))
    ));
  });
    describe('Efetua caso de reject', () => {
      test('Testa se ao passar o parametro "3" retorna um erro', () => {
        expect.assertions(1);
        return getUserName(3).catch((error) => 
          expect(error.message).toMatch('User with 3 not found.'))
      })
    });
  });
