const array = [5, 3, 2, 1, 4];
const target = 9;

const getTwoSum = (arr, target) => {
  const hash = new Map();

  for (const number of arr) {
    if (number - hash.has(target - number)) {
      return true;
    }
    hash.set(number, number);
  }

  return false;
};
