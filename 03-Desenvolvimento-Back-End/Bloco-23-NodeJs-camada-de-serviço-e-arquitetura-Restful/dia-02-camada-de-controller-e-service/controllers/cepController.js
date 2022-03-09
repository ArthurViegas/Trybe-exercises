const express = require('express');
const router = express.Router();

// const cepModels = require('../models/cepModels');
const cepService = require('../services/cepService');

router.get('/', (req, res) => res.json({message: 'oioioi'}))/

router.get('/:cep', async (req, res) => {
  try {
    const cepAddres = await cepService.findByCep(req.params.cep)
    return res.status(200).json(cepAddres)
  } catch (error) {
    console.log(error);
    res.status(500).json({message: 'algo deu errado do nosso lado do sistema :('})
  }
})

module.exports = router;