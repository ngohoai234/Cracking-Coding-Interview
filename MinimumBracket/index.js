// str = "a)bc(d)"

const minRemoveToMakeValid = (arr) => {
  if (typeof arr !== "string" || !arr.length) {
    return "";
  }

  let res = arr.split("");
  const stack = [];

  for (let i = 0; i < res.length; i++) {
    if (res[i] === "(") {
      stack.push(i);
    } else if (res[i] === ")" && stack.length) {
      stack.pop();
    } else if (res[i] === ")") {
      res[i] = "";
    }
  }
  while (stack.length) {
    currentIdx = stack.pop();
    res[currentIdx] = "";
  }
  return res.join("");
};

console.log(minRemoveToMakeValid("))(("));
