function reverseArray(arr) {
  var n = arr.length;
  console.log(`N ===>${n}`);
  for (var i = 0; i < n / 2; i++) {
    var temp = arr[i];
    arr[i] = arr[n - i - 1];
    arr[n - i - 1] = temp;
  }
  console.log("After Reverse");
  return arr;
}

var arr = [1, 2, 3, 4, 5];
console.log(reverseArray(arr));

function rvereseArray(arr, start, end) {
  while (start < end) {
    var temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  return arr;
}

var arr = [1, 2, 3, 4, 5, 6];
var n = 6;
console.log(rvereseArray(arr, 0, n - 1));
