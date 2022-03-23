const express = require('express');
const bodyParser = require('body-parser');
const cepController = require('./controllers/cepController')

const app = express();
app.use(bodyParser.json());

app.get('/', (_req, res) => {
  return res.status(200).json({message: "pong!"})
});

app.use('/cep', cepController)

app.listen(3000, () => console.log('escutando na rota 3000'))