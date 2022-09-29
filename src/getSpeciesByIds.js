const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {

  /* if (ids !== data.species.id){
    return []}
     data.species.forEach((specie) => {} ) */

    const arrAnimals = ids.map((i) => data.species.find((species) => species.id === i));
    const animalsId = (ids.length < 1) ? [] : arrAnimals;
    return animalsId
  };

console.log(data.species[0].id)
module.exports = getSpeciesByIds;
