function reverseArray(arr) {
    var n = arr.length;
    console.log( `N ===>${n}`)
    for (var i = 0; i < n/2; i++) {
      console.log(`array ===>  ${arr[i]}`)
      var temp = arr[i];
      console.log(`temp ===>  ${temp}`)
      arr[i] = arr[n-i-1];
      console.log(`arr[i] ===>  ${arr[i]}`)
      arr[n-i-1] = temp;
      console.log(`arr[n-i-1] ===>  ${arr[n-i-1]}`)
      console.log(`===========>`)
    }
    return arr;
  }

  var arr = [1, 2, 3, 4, 5];
console.log(reverseArray(arr));