const MoviesModel = require('../models/movieModels');

const getAll = async () => {
  const moviesData = await MoviesModel.getAll();
  return moviesData.map(getNewMovie);
};

const findById = async (id) => {
  const movieData = await MoviesModel
    .findById(id);

  if (!movieData) return null;

  return getNewMovie(movieData);
};

module.exports = {
  getAll,
  findById,
};