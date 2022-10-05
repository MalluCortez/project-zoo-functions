const data = require('../data/zoo_data');

function countAnimals(animal) {
  /* const quantity = data.species.find((element) => element.residents).residents.length; */
  /*   const nameAnimals = data.species.find((element) => element.name).name;
    const objetoQuantAnimals = {
      animal: data.species.find((element) => element.residents).residents.length,
    };
    return objetoQuantAnimals; */

  const object = {};
  data.species.forEach((a) => {
    object[a.name] = a.residents.length;
  });

  if (!animal) return object;
}

console.log(countAnimals());

module.exports = countAnimals;
