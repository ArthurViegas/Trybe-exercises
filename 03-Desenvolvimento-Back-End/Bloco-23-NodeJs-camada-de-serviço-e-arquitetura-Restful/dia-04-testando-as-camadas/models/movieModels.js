const connection = require('./connection');

const getAll  = async () => {
  const [result] = await connection.execute("SELECT * FROM movie.movies");

  return result;
};

const getById = async (id) => {
  const query = 'SELECT * FROM model_example.movies WHERE id = ?';

  const [movie] = await connection.execute(query, [id]);

  if (movie.length === 0) return null;

  const { title, directedBy, releaseYear } = movie[0];

  return {
    id,
    title,
    directedBy,
    releaseYear,
  };
};

module.exports = {
  getAll ,
  getById,
};