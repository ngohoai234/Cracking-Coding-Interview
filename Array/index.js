// what if you can not use additional data structures

const isUnique = (str) => {
  const hashCharacter = new Map();

  for (let i = 0; i < str.length; i++) {
    const element = str[i];

    if (hashCharacter.has(element)) {
      return false;
    } else {
      hashCharacter.set(elementrue);
    }
  }
  return true;
};

/**
    Input : string a, string b
    Output : return true if string a is permutation of the string b, otherwise return false
*/

// Example
// a : ab, b : eidbaooo
// return true

// a : ab, b : eidboaoo
// return false

const getKeysLength = (a) => {
  const keys = {};
  for (let i = 0; i < a.length; i++) {
    if (keys[a[i]]) {
      keys[a[i]]++;
    } else {
      keys[a[i]] = 1;
    }
  }
  return keys;
};

const checkInclusion = (a, b) => {
  if (typeof a !== "string" || typeof b !== "string") {
    return false;
  }

  const keys = getKeysLength(a);

  for (let i = 0; i < b.length; i++) {
    const containString = b.substr(i, a.length);
    const currentKeys = getKeysLength(containString);

    let isFail = false;

    for (const key of Object.keys(keys)) {
      if (keys[key] !== currentKeys[key]) {
        isFail = true;
      }
    }
    if (!isFail) {
      return true;
    }
  }
  return false;
};

const urlIfy = (str) => {
  if (typeof str !== "string") {
    return "";
  }
  let trimString = str.trim();
  let actualString = "";

  let start = -1;

  for (let i = 0; i < trimString.length; i++) {
    const element = trimString[i];
    if (element === " ") {
      start = i;
    } else {
      if (start === -1) {
        actualString += element;
      } else {
        actualString += "%20" + element;
        start = -1;
      }
    }
  }
  return actualString;
};

// 1.4 Cracking the Coding Interview -> 102 PDF

const checkPalindromePermutation = (str) => {
  if (typeof str !== "string") {
    return false;
  }

  const charMap = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char !== " ") {
      charMap[char] ? charMap[char]++ : (charMap[char] = 1);
    }
  }

  let isHasOddCharacter = false;

  for (const key in charMap) {
    if (charMap[key] % 2 !== 0) {
      if (isHasOddCharacter) {
        return false;
      } else {
        isHasOddCharacter = true;
      }
    }
  }

  return true;
};

const countMapByCharacters = (str) => {
  const charMap = {};

  for (const character of str) {
    charMap[character] ? charMap[character]++ : (charMap[character] = 1);
  }

  return charMap;
};

// 1.5 One way 102
const checkOneWay = (str1, str2) => {
  if (typeof str1 !== "string" || typeof str2 !== "string") {
    return false;
  }

  const charMapA = countMapByCharacters(str1);
  const charMapB = countMapByCharacters(str2);

  let isNotHasCharacter = false;

  for (const character in charMapA) {
    if (charMapA[character] !== charMapB[character]) {
      if (isNotHasCharacter) {
        return false;
      } else {
        isNotHasCharacter = true;
      }
    }
  }
  return true;
};

// 1.6 String Compression
const stringCompression = (str) => {
  if (typeof str !== "string") {
    return;
  }
  if (str.length <= 1) {
    return str;
  }
  let count = 0;
  let string = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      count++;
      string += str[i] + count;
      count = 0;
    }
  }
  return string.length < str.length ? str : string;
};

// 1.7 rotate matrix
const rotateMatrix = (matrix) => {
  if (!Array.isArray(matrix) || !Array.isArray(matrix[0])) {
    return [];
  }
  const n = matrix.length;

  // flip horizontally
  for (let i = 0; i < Math.round(n / 2); i++) {
    const startRow = i;
    // top = left
    // left = bottom
    // bottom = right
    // right = tempTop
    const last = n - i - 1;
    for (let j = startRow; j < last; j++) {
      const offset = last - j + startRow;
      const tempTop = matrix[startRow][j];
      matrix[startRow][j] = matrix[offset][startRow];
      matrix[offset][startRow] = matrix[last][offset];
      matrix[last][offset] = matrix[j][last];
      matrix[j][last] = tempTop;
    }
  }
  console.log(matrix);
};

// 1.8 Zero matrix must do in place (no extra space)

const nullifyRow = (matrix, row) => {
  for (let j = 0; j < matrix[0].length; j++) {
    matrix[row][j] = 0;
  }
};

const nullifyColumn = (matrix, column) => {
  for (let j = 0; j < matrix.length; j++) {
    matrix[j][column] = 0;
  }
};

const setZeroes = (matrix) => {
  if (!Array.isArray(matrix) || !matrix.length || !matrix[0].length) {
    return [];
  }
  let hasRowZero = false;
  let hasColumnZero = false;
  // check row zero

  for (let i = 0; i < matrix[0].length; i++) {
    if (!matrix[0][i]) {
      hasRowZero = true;
      break;
    }
  }

  // check column zero

  for (let i = 0; i < matrix.length; i++) {
    if (!matrix[i][0]) {
      hasColumnZero = true;
      break;
    }
  }

  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
      if (!matrix[i][j]) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  for (let i = 1; i < matrix[0].length; i++) {
    if (!matrix[0][i]) {
      nullifyColumn(matrix, i);
    }
  }
  for (let i = 1; i < matrix.length; i++) {
    if (!matrix[i][0]) {
      nullifyRow(matrix, i);
    }
  }

  if (hasRowZero) {
    nullifyRow(matrix, 0);
  }

  if (hasColumnZero) {
    nullifyColumn(matrix, 0);
  }
  return matrix;
};

// 1.9 String Rotation

const getHashCharacters = (str) => {
  const hash = new Map();

  for (const char of str) {
    if (hash.has(char)) {
      hash.set(char, hash.get(char) + 1);
    } else {
      hash.set(char, 1);
    }
  }

  return { ...Object.fromEntries(hash) };
};

const rotateString = (s1, s2) => {
  // brute force solution
  if (
    typeof s1 !== "string" ||
    typeof s2 !== "string" ||
    s1.length !== s2.length
  ) {
    return false;
  }
  return s1.concat(s1).includes(s2);
};
