// a)b(c)d
// 1249. Minimum Remove to Make Valid Parentheses
const minRemoveToMakeValid = (s) => {
  if (typeof s !== "string") {
    return "";
  }
  s = s.split("");
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    if (element === "(") {
      stack.push(i);
    } else if (element === ")") {
      if (stack.length) {
        stack.pop();
      } else {
        s[i] = "";
      }
    }
  }
  while (stack.length) {
    const index = stack.pop();
    s[index] = "";
  }

  return s.join("");
};

console.log(minRemoveToMakeValid("a)b(c)d"));
