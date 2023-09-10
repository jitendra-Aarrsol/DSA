const decFun = (n) => {
  let ans = 0;
  let i = 0;
  while (n !== 0) {
    let digit = Math.floor(n % 10);
    if (digit === 1) {
      ans = ans + Math.pow(2, i);
    }
    n = Math.floor(n / 10);
    i++;
  }
  return ans;
};

console.log(decFun(10100));
