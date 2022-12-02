const array = [2, 3, 4, 5, 18, 17, 6];

// formula : area = l * w

const getContainerWithMostWater = (heights) => {
  if (!Array.isArray(heights)) {
    return 0;
  }
  let maxArea = 0;
  let left = 0;
  let right = heights.length - 1;
  while (left < right) {
    const height = Math.min(heights[left], heights[right]);
    const width = right - left;
    const area = height * width;

    if (heights[left] > heights[right]) {
      right--;
    } else {
      left++;
    }
    maxArea = Math.max(maxArea, area);
  }
  console.log(maxArea);
  return maxArea;
};

getContainerWithMostWater(array);
