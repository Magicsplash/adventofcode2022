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

  let highest = 0;

  for (individual in caloriesPerIndividual) {
    console.log(caloriesPerIndividual[individual]);

    if(highest < caloriesPerIndividual[individual]){
      highest = caloriesPerIndividual[individual] 
    }
  }
  console.log(highest);
}

function setAndReset() {
  caloriesPerIndividual[index] = count;
  index = index + 1;
  count = 0;
}