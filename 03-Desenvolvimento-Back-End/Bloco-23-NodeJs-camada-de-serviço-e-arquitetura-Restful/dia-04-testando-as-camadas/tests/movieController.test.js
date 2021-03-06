const sinon = require('sinon');
const { expect } = require('chai');

const MoviesService = require('../services/movieService');
const MoviesController = require('../controllers/movieController');

describe('Ao chamar o controller de findById', () => {
  describe('quando não existem filmes no banco de dados', async () => {
    const response = {};
    const request = {};

    before(() => {
      request.params = {
        id: 1
      };

      response.status = sinon.stub()
        .returns(response);
      response.send = sinon.stub()
        .returns();

      sinon.stub(MoviesService, 'findById')
        .resolves(null);
    })

    after(() => {
      MoviesService.findById.restore();
    })

    it('é chamado o método "status" passando 404', async () => {
      await MoviesController.findById(request, response);

      expect(response.status.calledWith(404)).to.be.equal(true);
    });

    it('é chamado o método "send" passando a mensagem "Not Found"', async () => {
      await MoviesController.findById(request, response);

      expect(response.send.calledWith('Not Found')).to.be.equal(true);
    });

  });

  describe('quando existem filmes no banco de dados', async () => {
    const response = {};
    const request = {};

    before(() => {
      request.params = {
        id: 1
      };

      response.status = sinon.stub()
        .returns(response);
      response.json = sinon.stub()
        .returns();

      sinon.stub(MoviesService, 'findById')
        .resolves({
          id: 1,
          title: 'Example Movie',
          directedBy: 'Jane Dow',
          releaseYear: 1999,
        });
    })

    after(() => {
      MoviesService.findById.restore();
    })

    it('é chamado o método "status" passando o código 200', async () => {
      await MoviesController.findById(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
    });

    it('é chamado o método "json" passando um objeto', async () => {
      await MoviesController.findById(request, response);

      expect(response.json.calledWith(sinon.match.object)).to.be.equal(true);
    });
  });
});