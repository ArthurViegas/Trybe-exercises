const express = require('express');
const app = express();

app.get('/ping', (_req, res) => {
  res.json({"message": 'pong'})
})

app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.status(200).json({"message": `Hello, ${nome}!`})
})

app.listen(3000, () => console.log('alo alo teste'))