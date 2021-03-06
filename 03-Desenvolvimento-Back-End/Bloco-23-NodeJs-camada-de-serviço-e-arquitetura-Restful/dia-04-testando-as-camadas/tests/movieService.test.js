const { expect } = require('chai');
const sinon = require('sinon');

const movieService = require('../services/movieServices')

describe('Busca apenas um filme no BD por seu ID', () => {
  before(async () => {
    const execute = [[]];

    sinon.stub(connection, 'execute').resolves(execute);
  })

  after(async () => {
    connection.execute.restore();
  })

  describe('quando não existe um filme com o ID informado', () => {
    it('retorna null', async () => {
      const response = await MoviesService.findById();

      expect(response).to.be.equal(null);
    });
  });

  describe('quando existe um filme com o ID informado', () => {

    before(() => {
      sinon.stub(MoviesModel, 'getById')
        .resolves(
          {
            id: 1,
            title: 'Example Movie',
            directedBy: 'Jane Dow',
            releaseYear: 1999,
          }
        );
    });

    after(() => {
      MoviesModel.getById.restore();
    })

    it('retorna um objeto', async () => {
      const response = await MoviesService.findById(1);

      expect(response).to.be.an('object');
    });

    it('o objeto não está vazio', async () => {
      const response = await MoviesService.findById(1);

      expect(response).to.be.not.empty;
    });

    it('tal objeto possui as propriedades: "id", "title", "releaseYear" e "directedBy"', async () => {
      const item = await MoviesService.findById(1);

      expect(item).to.include.all.keys('id', 'title', 'releaseYear', 'directedBy')
    });
  });
});

describe('', () => {
  describe('', () => {
    it('retorna um array', () => {
      const result = await movieService.getAll();

      expect(result).to.be.an('array')
    })
    it('retorna um array vazio', () => {
      const result = await movieService.getAll();

      expect(result).to.be.empty;
    })
  })
})