const connection = require('./connection');

function userFormat({ id, first_name: firstName, last_name: lastName, email}) {
  return {
    id,
    firstName,
    lastName,
    email,
  }
}

function createUser({firstName, lastName, email, password}) {
  const query = 'INSERT INTO users (first_name, last_name, email, password) VALUES (?,?,?,?)'

  return connection.execute(query, [firstName, lastName, email, password])
    .then(([data]) =>({id: data.insertId, firstName, lastName, email}))
}

module.exports = {
  userFormat,
  createUser
}