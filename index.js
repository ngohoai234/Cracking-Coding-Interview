const sortCharacterFrequently = (str) => {
  const hashCount = new Map();
  const tempStr = str.split('').sort().join('');

  for (const character of tempStr) {
    let count = hashCount.get(character);
    if (count) {
      hashCount.set(character, (count += 1));
    } else {
      hashCount.set(character, 1);
    }
  }
  const sortedString = [...hashCount.keys()].sort((a, b) => {
    return hashCount.get(b) - hashCount.get(a);
  });

  return sortedString.reduce((acc, item) => {
    return acc + new Array(hashCount.get(item)).fill(item).join('');
  }, '');
};

const checkDirection = (d1, d2, m) => {
  if (d1.length !== d2.length) {
    return false;
  }
  const hashDirection = new Map();

  for (let i = 0; i < d1.length; i++) {
    const currentKey = `${d1[i]}-${d2[i]},${d2[i]}-${d1[i]}`;
    if (!hashDirection.has(currentKey)) {
      hashDirection.set(`${d1[i]}-${d2[i]}`, 1);
      hashDirection.set(`${d2[i]}-${d1[i]}`, 1);
    }
  }
  for (let i = 1; i < m; i++) {
    if (!hashDirection.has(`${i}-${i + 1}`)) {
      return false;
    }
  }
  return true;
};
console.log(checkDirection([1, 3], [2, 2], 3));
