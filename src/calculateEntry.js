const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = entrants.filter((entrant) => entrant.age < 18).length;
  const adult = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length;
  const senior = entrants.filter((entrant) => entrant.age >= 50).length;
  return { child, adult, senior };
}

function calculateEntry(entrants) {
  if (!entrants) return 0;
  if (Object.keys(entrants).length === 0) return 0;
  const calculateChild = countEntrants(entrants).child * data.prices.child;
  const calculateAdult = countEntrants(entrants).adult * data.prices.adult;
  const calculateSenior = countEntrants(entrants).senior * data.prices.senior;

  return calculateChild + calculateAdult + calculateSenior;
}

module.exports = { calculateEntry, countEntrants };
