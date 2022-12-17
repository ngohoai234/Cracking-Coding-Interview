const isValidParenthesis = (str) => {
  const stack = [];

  for (const character of str) {
    switch (character) {
      case "{":
      case "[":
      case "(": {
        stack.push(character);
        break;
      }
      default: {
        const l = stack.pop();
        switch (character) {
          case "}":
            if (l !== "{") {
              return false;
            }
            break;
          case "]":
            if (l !== "[") {
              return false;
            }
            break;
          case ")":
            if (l !== "(") {
              return false;
            }
            break;
          default:
            return false;
        }
        break;
      }
    }
  }
  if (str.length) {
    return false;
  }
  return true;
};

console.log(isValidParenthesis("(("));
