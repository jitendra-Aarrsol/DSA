// This function is only for positive number
const binaryFun = (n) => {
  let ans = 0;
  let i = 0;
  while (n !== 0) {
    let bit = n & 1;
    ans = bit * Math.pow(10, i) + ans;
    n = n >>> 1;
    i++;
  }
  return ans;
};
console.log(binaryFun(10000));
/*
ans = 0
normal flow 123 ans = (ans * 10) + digit
reverse flow 123 ans =(digit * 10^i) +ans
*/
