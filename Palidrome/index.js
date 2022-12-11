var isPalindrome = function (s) {
  if (typeof s !== "string") {
    return false;
  }
  if (s.length <= 1) {
    return true;
  }
  const str = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  let left = 0,
    right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      console.log(str[left], str[right]);
      return false;
    }
    left++;
    right--;
  }

  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
