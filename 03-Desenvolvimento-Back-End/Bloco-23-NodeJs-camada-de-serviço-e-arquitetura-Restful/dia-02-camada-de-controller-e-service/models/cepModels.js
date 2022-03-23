const { execute } = require('./connection');
const connection = require('./connection');

const formatCep = (cep) => {
  if (CEP_REGEX.test(cep)) return cep;

  return cep.replace(/(\d{5})(\d{3})/, '$1-$2');
};

const setNewCep = ({cep, localidade, logradouro, bairro, uf}) => ({
  cep: formatCep(cep),
  logradouro,
  bairro,
  localidade,
  uf});


const getCep = async (cep) => {

  const treatedCep = cep.replace('-', '');
  const query = 'SELECT cep, logradouro, bairro, localidade, uf FROM ceps where cep = ?';

  const result = await connection.execute(query, [treatedCep])
    .then(([results]) => (results.length ? results[0] : null))

    if (!result) return null;

    return setNewCep(result);
}

const removeCep = async (cep) => {
  return await connection.execute('DELETE FROM ceps where cep = ?', [cep])
}

module.exports = {
  getCep,
  removeCep
}
