const service = require('../exercicio1')

test('Testa a função com retorno 10', () => {
  service.genRandNum = jest.fn().mockReturnValue(10)
  
  expect(service.genRandNum).toHaveBeenCalledTimes(0)

  expect(service.genRandNum()).toBe(10)
  expect(service.genRandNum).toHaveBeenCalledTimes(1)
})