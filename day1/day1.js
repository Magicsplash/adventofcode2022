const fs = require('fs');

const allFileContents = fs.readFileSync('day1input.txt', 'utf-8');

const caloriesPerIndividual = [];
let index = 0;
let count = 0;

main();

function main() {

  allFileContents.split(/\r?\n/).forEach((line) => {

    if (line === '' || line === undefined) {
      setAndReset();
      return;
    }

    count += Number(line);
  });

  setAndReset();

  caloriesPerIndividual.sort((a, b) => b - a);

  console.log('highest === first below.')
  for (individual in caloriesPerIndividual) {
    console.log(caloriesPerIndividual[individual]);
  }

  console.log('total of first 3 =')
  console.log(caloriesPerIndividual[0] + caloriesPerIndividual[1] + caloriesPerIndividual[2]);
}

function setAndReset() {
  caloriesPerIndividual[index] = count;
  index = index + 1;
  count = 0;
}