const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((element) => element.managers.some((e) => e === id));
}

function getRelatedEmployees(managerId) {
  const findSubordinates = data.employees.filter((e) =>
    e.managers.some((s) => s === managerId))
    .map(({ firstName, lastName }) => `${firstName} ${lastName}`);

  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return findSubordinates;
}

console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));
module.exports = { isManager, getRelatedEmployees };
