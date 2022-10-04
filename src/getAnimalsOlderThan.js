const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, ages) {
  const findSpecies = data.species.find(({ name }) => name === animal);
  const animalsAge = findSpecies.residents.every(({ age }) => age >= ages);

  return animalsAge;
}

console.log(getAnimalsOlderThan('otters', 7));

module.exports = getAnimalsOlderThan;
