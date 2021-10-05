const service = require('../exercicio1')

test('Testa função recebendo parametros para divisao', () => {
  service.genRandNum = jest.fn().mockImplementationOnce((a,b) => a / b);

  expect(service.genRandNum(10, 2)).toBe(5)
  expect(service.genRandNum).toHaveBeenCalled();
  expect(service.genRandNum).toHaveBeenCalledTimes(1)
  expect(service.genRandNum).toHaveBeenCalledWith(10,2)
})