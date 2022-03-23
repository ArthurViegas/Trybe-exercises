const peopleController = require('../models/songsModel');

// const update = async (person) => {
//   const id = Number(person.id);
//   const updatedPerson = await peopleController.update(id, person.name, person.genre);

//   if(!updatedPerson.affectedRows) {
//     return null;
//   }
//   return (...person, id)
// };

const getAll = async () => peopleController.getAll();
module.exports = {
  getAll,
};