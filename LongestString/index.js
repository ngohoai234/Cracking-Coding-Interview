const string = "bbbbb";

const findTheLongestString = (str) => {
  if (typeof str !== "string") {
    return "Invalid Input";
  }
  if (!str.length || str.length < 2) {
    return string.length;
  }
  const hashInput = {};
  let left = 0;
  let longest = 0;
  for (let right = 0; right < str.length; right++) {
    const currentChar = str[right];
    const indexChar = hashInput[currentChar];

    if (indexChar >= left) {
      left = indexChar + 1;
    }

    hashInput[currentChar] = right;
    longest = Math.max(longest, right - left + 1);
  }
  return longest;
};

console.log(findTheLongestString(string));
