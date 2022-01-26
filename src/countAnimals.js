const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  const createName = (element) => element.name;
  const count = (element) => element.residents.length;
  const obj = data.species.map(createName);
  const cont = data.species.map(count);
  const putTogether = (element, index) => element.name 
  const objFinal = obj.map(putTogether)
  console.log(obj);
  console.log(cont);
}

console.log(countAnimals());

module.exports = countAnimals;
