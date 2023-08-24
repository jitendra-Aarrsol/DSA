const binarySearch = (array, x) => {
  let start = 0;
  let end = array.length;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (array[mid] === x) return true;
    else if (array[mid] < x) {
      start = mid + 1;
    } else end = mid - 1;
  }
  return false;
};

console.log(binarySearch([10, 20, 30, 40], 10));
