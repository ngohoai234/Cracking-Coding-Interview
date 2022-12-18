const binarySearch = (arr, left, right, target) => {
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    const value = arr[mid];

    if (value === target) {
      return mid;
    } else if (value < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};
// 34. Find First and Last Position of Element in Sorted Array
// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
const searchRange = (nums, target) => {
  if (!nums.length) {
    return [-1, -1];
  }
  const firstPos = binarySearch(nums, 0, nums.length - 1, target);
  if (firstPos === -1) {
    return [-1, -1];
  }

  let startPos = firstPos,
    endPos = firstPos,
    temp1,
    temp2;

  while (startPos !== -1) {
    temp1 = startPos;
    startPos = binarySearch(nums, 0, startPos - 1, target);
  }
  while (endPos !== -1) {
    temp2 = endPos;
    endPos = binarySearch(nums, endPos + 1, nums.length - 1, target);
  }
  return [temp1, temp2];
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 7));
