const data = require('../data/zoo_data');

function countEntrants(entrants) {
  return {
    child: entrants.filter((entrant) => entrant.age < 18),
    adult: entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50),
    senior: entrants.filter((entrant) => entrant.age >= 50),
  };
}

function calculateEntry(entrants) {
  // seu código aqui
}

console.log(countEntrants('Lara Carvalho'));
module.exports = { calculateEntry, countEntrants };