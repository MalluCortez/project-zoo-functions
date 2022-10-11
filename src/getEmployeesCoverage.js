const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function errorGetEmployees(findEmployees) {
  if (!findEmployees) throw new Error('Informações inválidas');
}

function noParameterGetEmployees() {
  const allEmployees = data.employees.map((e) => {
    const findSpecieAllName = e.responsibleFor.map((elemento) => species
      .find((a) => a.id === elemento).name);
    const arrAllLocations = e.responsibleFor.map((elemento) => species
      .find((a) => a.id === elemento).location);
    return {
      id: e.id,
      fullName: `${e.firstName} ${e.lastName}`,
      species: findSpecieAllName,
      locations: arrAllLocations,
    };
  });
  return allEmployees;
}

function getEmployeesCoverage(names) {
  if (!names) return noParameterGetEmployees();
  const findEmployees = data.employees.find((employee) => {
    if (employee.id === names.id || employee.firstName === names.name
      || employee.lastName === names.name) return true;
    return false;
  });
  errorGetEmployees(findEmployees);
  const findSpecieName = findEmployees.responsibleFor.map((e) => species
    .find((a) => a.id === e).name);
  const arrLocation = findEmployees.responsibleFor.map((e) => species
    .find((a) => a.id === e).location);
  return {
    id: findEmployees.id,
    fullName: `${findEmployees.firstName} ${findEmployees.lastName}`,
    species: findSpecieName,
    locations: arrLocation,
  };
}

console.log(getEmployeesCoverage({ name: 'Sharonda' }));
module.exports = getEmployeesCoverage;
