// 844. Backspace String Compare

// solution use stack
// Time complexity : O(2n)
// Space complexity : O(n)
const convertString = (str) => {
  const stack = [];

  for (const character of str) {
    if (character === "#") {
      stack.pop();
    } else {
      stack.push(character);
    }
  }
  return stack.join("");
};

const backspaceCompare = function (s, t) {
  let p1 = s.length - 1,
    p2 = t.length - 1;
  debugger;
  while (p1 >= 0 || p2 >= 0) {
    const currentS = s[p1];
    const currentT = t[p2];
    if (currentS === "#" || currentT === "#") {
      if (currentS === "#") {
        let backCount = 2;
        while (backCount > 0) {
          p1--;
          backCount--;
          if (s[p1] === "#") {
            backCount += 2;
          }
        }
      }
      if (currentT === "#") {
        let backCount = 2;
        while (backCount > 0) {
          p2--;
          backCount--;
          if (t[p2] === "#") {
            backCount += 2;
          }
        }
      }
    } else {
      if (currentS !== currentT) {
        return false;
      } else {
        p1--;
        p2--;
      }
    }
  }
  return true;
};

backspaceCompare("bxj##tw", "bxj###tw");
