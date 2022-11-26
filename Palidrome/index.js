var isPalindrome = function (s) {
  if (typeof s !== "string") {
    return 0;
  }
  debugger;
  const actualString = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  const str = actualString.split("").reverse().join("").toLowerCase();
  return actualString === str;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
