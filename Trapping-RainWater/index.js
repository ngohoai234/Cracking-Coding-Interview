const array = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2];

// solution 1: two arrays
// const getTrappingRainWater = (arr) => {
//   if (!Array.isArray(arr) || arr.length < 2) {
//     return 0;
//   }
//   const length = arr.length;
//   const left = [];
//   const right = new Array(length).fill(0);
//   let total = 0;

//   left.push(arr[0]);
//   right[length - 1] = arr[length - 1];

//   for (let i = 1; i < length; i++) {
//     left.push(Math.max(left[i - 1], arr[i]));
//   }

//   for (let i = length - 2; i >= 0; i--) {
//     right[i] = Math.max(arr[i], right[i + 1]);
//   }
//   for (let i = 1; i < arr.length - 1; i++) {
//     const maxBetween = Math.min(left[i], right[i]);
//     total += maxBetween - arr[i];
//   }
//   return total;
// };

// left pointer < right pointer

const getTrappingRainWater = (arr) => {
  if (!Array.isArray(arr)) {
    return 0;
  }
  let i = 0;
  let j = arr.length - 1;
  let left_max = 0;
  let right_max = 0;
  let total = 0;
  while (i < j) {
    if (arr[i] <= arr[j]) {
      if (arr[i] >= left_max) {
        left_max = arr[i];
      } else {
        total += left_max - arr[i];
      }
      i++;
    } else {
      if (arr[j] >= right_max) {
        right_max = arr[j];
      } else {
        total += right_max - arr[j];
      }
      j--;
    }
  }
  return total;
};

// solution 2: two pointers

console.log(getTrappingRainWater(array));
