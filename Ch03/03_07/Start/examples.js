const mixedUpNumbers = [10, 2, 4, 3, 7, 5, 8, 9, 1, 6];

const ascending = (a, b) => {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
};

const sortedNumbers = mixedUpNumbers.slice().sort(ascending);

console.log(sortedNumbers);

const descending = (a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
};

const sortedNumbersDescending = mixedUpNumbers.slice().sort(descending);

console.log(sortedNumbersDescending);

// HOC
const sortFactory = type => (a, b) => {
  if (type === 'ascending') {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  }
  if (type === 'descending') {
    if (a > b) return -1;
    if (a < b) return 1;
    return 0;
  }
};

const sortedNum = mixedUpNumbers.slice().sort(sortFactory('descending'));

console.log('Sorted numbers', sortedNum);
