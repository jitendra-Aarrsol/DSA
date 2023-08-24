const ArrayRotation = () => {
  let array = [1, 2, 3, 4, 5, 6, 7];
  let position = 2;
  let temp = [];
  let k = 0;
  for (let i = position; i < array.length; i++) {
    temp[k] = array[i];
    k++;
  }
  console.log("-----kkkk", k);

  for (let i = 0; i < position; i++) {
    temp[k] = array[i];
    k++;
  }
  console.log("-----kkkk", k);
  for (let i = 0; i < temp.length; i++) {
    console.log(`Array ${temp[i]}`);
  }
};
ArrayRotation();
