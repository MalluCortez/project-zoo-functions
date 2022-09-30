const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const arrAnimals = ids.map((i) => data.species.find((specie) => specie.id === i));
  const animalsId = (ids.length === 0) ? [] : arrAnimals;
  return animalsId;
}
module.exports = getSpeciesByIds;
