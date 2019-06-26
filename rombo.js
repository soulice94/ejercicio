const getLenght = (size) => {
  return (size * 2) - 1;
}

const getCentralPosition = (size) => {
  return size - 1;
};

const factoryArray = (lenght) => {
  const firstLine = [];
  for(let i = 0; i<lenght; i++) {
    firstLine.push(' ');
  }
  return firstLine;
};

const arrayName = 'pedro'.split('');
const arrayLenght = arrayName.length;
// lenght = 7
const totalLenght = getLenght(arrayLenght);
// ivan - 3
const centralPosition = getCentralPosition(arrayLenght);
const results = [];


for(let indexName = 0; indexName < arrayLenght; indexName++) {
  let l = centralPosition - 1;
  let r = centralPosition + 1
  let firstLine = factoryArray(totalLenght);
  firstLine[centralPosition] = arrayName[indexName];
  for(decIndex = indexName; decIndex > 0; decIndex--) {
    firstLine[l] = firstLine[r] = arrayName[decIndex - 1];
    r++;
    l--;
  }
  let result =  firstLine.join('');
  console.log(result);
  results.push(result);
}

for (let i=results.length - 2; i>=0; i--) {
  console.log(results[i]);
}






