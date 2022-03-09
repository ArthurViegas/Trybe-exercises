const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();

router.get('/list-products', async (req, res, next) => {
  const products = await ProductModel.getAll();

  return res.status(200).json(products);
});

router.get('/list-products/:id', async (req, res, next) => {
  const product = await ProductModel.getById(req.params.id);

  return res.status(200).json(product);
});

router.post('/add-product', async (req, res) => {
  const { name, brand } = req.body;

  const newProduct = await ProductModel.add(name, brand);

  return res.status(201).json(newProduct);

});

router.delete('/delete-product/:id', async (req, res) => {
  const product = await ProductModel.exclude(req.params.id);

  return res.status(200).json(product);
});

router.put('/update-product/:id', async (req, res) => {
  const { name, brand } = req.body;

  const product = await ProductModel.update(req.params.id, name, brand);

  return res.status(200).json(product);
});

module.exports = router;