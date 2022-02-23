const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'trybe',
  password: 'loginusertrybe',
  database: 'users_crud',
})

module.exports = connection;