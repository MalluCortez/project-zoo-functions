const data = require('../data/zoo_data');

function getEmployeeByName(names) {
  const findName = data.employees.find(({ firstName, lastName }) =>
    firstName === names || lastName === names);

  if (!names) return {};
  return findName;
}

module.exports = getEmployeeByName;
