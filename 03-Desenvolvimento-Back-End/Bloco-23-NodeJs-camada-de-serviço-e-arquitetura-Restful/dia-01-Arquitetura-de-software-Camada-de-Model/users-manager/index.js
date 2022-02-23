const express = require('express');
const bodyparser = require('body-parser');
const middlewares = require('./middlewares');
// const {
//   nameValidation,
//   emailValidation,
//   passValidation
// } = require('.')
// const createUser = require('./users-manager/models/createUser')

const app = express(); 
app.use(bodyparser.json());

app.post('/user', middlewares.createUser)

app.use(middlewares.error);

app.listen(3000, () => console.log('oi, ta na index'))