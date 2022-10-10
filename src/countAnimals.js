const data = require('../data/zoo_data');

function allAnimals() {
  const object = {};
  data.species.forEach((a) => {
    object[a.name] = a.residents.length;
  });
  return object;
}

function countAnimals(animal) {
  if (!animal) return allAnimals();
  const { specie, sex } = animal;
  const findAnimal = data.species.find(({ name }) => name === specie);
  const findAnimalSex = findAnimal.residents.filter((resident) => resident.sex === sex).length;
  if (sex) return findAnimalSex;
  return findAnimal.residents.length;
}

console.log(countAnimals({ specie: 'elephants', sex: 'male' }));

module.exports = countAnimals;
