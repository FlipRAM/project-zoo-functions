const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  const listOfAnimals = data.species.map(
    (element) => element.name,
  );
  const animalCount = data.species.map(
    (element) => element.residents.length,
  );
  const animalObj = {};
  for (let index = 0; index < listOfAnimals.length; index += 1) {
    animalObj[listOfAnimals[index]] = animalCount[index];
  }
  console.log(listOfAnimals);
  console.log(animalCount);
  console.log(animalObj);
  console.log(animal);
  return animalObj;
}

console.log(countAnimals('lions'));

module.exports = countAnimals;
