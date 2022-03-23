const cepController = require ('../models/cepModels');

const CEP_REGEX = /\d{5}-?\d{3}/;


const findByCep = async (cep) => {

  const cepAddres = await cepController.getCep(cep)

  if (!CEP_REGEX.test(cepAddres)) {
    return {
      error: {
        code: 'invalidData',
        message: 'cep invalido'
      }
    }
  }

  if (!cepAddres) {
    return {
      error: {
        code: 'notFound',
        message: 'cep não encontrado'
      }
    };
  }

  return cepAddres;
};

const removeCep = async (cep) => {
  const result = await cepController.removeCep(cep);
  return result
};

module.exports = {
  findByCep,
  removeCep
};