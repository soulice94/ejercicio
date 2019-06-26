const getLenght = (size) => {
  return (size * 2) - 1;
}

const getPosition = (size) => {
  return size - 1;
};

const factoryArray = (lenght) => {
  const firstLine = [];
  for(let i = 0; i<lenght; i++) {
    firstLine.push(' ');
  }
  return firstLine;
};

const arrayName = 'ivan'.split('');
const arrayLenght = arrayName.length;
// lenght = 7
const totalLenght = getLenght(arrayLenght);
// ivan - 3
const initPosition = getPosition(arrayLenght);
// arrayName[0] == i
let indexName = 0;

let firstLine = factoryArray(totalLenght);

firstLine[initPosition] = arrayName[indexName];

console.log(firstLine.join(''));

indexName++;
for(indexName = indexName; indexName < arrayLenght; indexName++) {
  let l = initPosition - 1;
  let r = initPosition + 1
  firstLine = factoryArray(totalLenght);
  firstLine[initPosition] = arrayName[indexName];
  for(decIndex = indexName; decIndex > 0; decIndex--) {
    firstLine[l] = firstLine[r] = arrayName[decIndex - 1];
    r++;
    l--;
  }
  console.log(firstLine.join(''));
}






