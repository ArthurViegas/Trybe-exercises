const { expect } = require("chai");
const sinon = require('sinon');

const connection = require('../../models/connection');


const movieModel = require ('../../models/movieModels')


describe('Buscar todos filmes do DB', () => {
  describe('Quando nao existe nenhum filme', () => {

    before(()=> {
      const execute = [[]];
      sinon.stub(connection, 'execute').resolves(execute)
    })

    after(() => {
      connection.execute.restore();
    })

    it('Retorna um array', async () => {
      const result = await movieModel.getAll();
      expect(result).to.be.an('array')
    });
    it('Retorna um array vazio', async () => {
      const result = await movieModel.getAll();

      expect(result).to.be.empty;
    });
  })
  describe('quando existe filmes', () => {

    before(() => {
      const returnExecute = [
        [
          {
        id: 1,
        title: 'exemplo',
        directed_by: 'trybe',
        release_year: 1999
      }
      ]
    ]
      sinon.stub(connection, 'execute').resolves(returnExecute)
    })

    after(() => {
      connection.execute.restore;
    })

    it('retorna um array', () =>{
      it('Retorna um array', async () => {
        const result = await movieModel.getAll();
        expect(result).to.be.an('array')
      });
    });

    it('array nao esta vazio', async ()=>{
      const result = await movieModel.getAll();
      expect(result).to.be.not.empty;
    });

    it('o array possui um objeto', async () =>{
      const [item] = await movieModel.getAll();
      expect(item).to.nested.an('object')
    });
    
    it('o item tem as propriedades "id", "title", "releaseYear"', async () => {
      const [item] = await movieModel.getAll();
      expect(item).to.include.all.keys(
        'id',
        'title',
        'directed_by',
        'release_year'
      )
    });
  })
})