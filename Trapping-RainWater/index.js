const array = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

const getTrappingRainWater = (arr) => {
  if (!Array.isArray(arr) || arr.length < 2) {
    return 0;
  }
  const left = [];
  let right = [];
  let maxLeft = 0;
  let maxRight = 0;

  for (let i = 0; i < arr.length; i++) {
    maxLeft = Math.max(maxLeft, arr[i]);
    left.push(maxLeft);
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    maxRight = Math.max(maxRight, arr[i]);
    right.push(maxRight);
  }
  right = right.reverse();
};

console.log(getTrappingRainWater(array));

// maxLeft = 1
// maxRight = 3

//
