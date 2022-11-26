const swap = (arr, partitionIdx, right) => {
  const temp = arr[partitionIdx];
  arr[partitionIdx] = arr[right];
  arr[right] = temp;
};

const partition = (arr, left, right) => {
  const pivotElement = arr[right];
  let partitionIndex = left;

  for (let i = left; i < right; i++) {
    if (arr[i] < pivotElement) {
      // swap
      swap(arr, partitionIndex, i);
      partitionIndex++;
    }
  }
  swap(arr, partitionIndex, right);
  return partitionIndex;
};

const quickSort = (arr, left, right) => {
  if (left < right) {
    const p = partition(arr, left, right);
    quickSort(arr, left, p - 1);
    quickSort(arr, p + 1, right);
  }
};

const arr = [5, 4, 3, 2, 1];

const getKthLargest = (array, k) => {
  const indexToFind = array.length - k;

  quickSort(arr, 0, array.length - 1);

  return arr[indexToFind];
};
