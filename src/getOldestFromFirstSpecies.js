const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const findFirstSpecie = data.employees.find((employee) => employee.id === id).responsibleFor[0];
  const oldestAnimal = data.species
    .find((specie) => specie.id === findFirstSpecie).residents.reduce((acc, specie) => {
      const specieAge = acc.age > specie.age ? acc : specie;
      return specieAge;
    });
  return Object.values(oldestAnimal);
}

module.exports = getOldestFromFirstSpecies;
