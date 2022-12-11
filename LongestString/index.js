const string = "pwwkew";

// abcbdaac
// aba
// tmmzuxt

// Time Complexity : O(n)
// Space : O(n)
const findTheLongestString = (str) => {
  if (str.length <= 1) {
    return str.length;
  }
  let longest = 0,
    left = 0;
  const hash = new Map();

  for (let right = 0; right < str.length; right++) {
    const element = str[right];
    if (hash.has(element)) {
      const idxDuplicateChar = hash.get(element);
      if (left <= idxDuplicateChar) {
        left = idxDuplicateChar + 1;
      }
    }
    longest = Math.max(longest, right - left + 1);
    hash.set(element, right);
  }
  return longest;
};

console.log(findTheLongestString(string));
