const arr1 = [1, 4, 45, 6, 10, 8];
const arr2 = [1, 2, 4, 3, 6];
const arr3 = [1, 2, 3, 4, 5];

const keyPair = (arr, target) => {
  for (let num of arr) {
    const pair1 = target - num;
    const pair2 = target - pair1;

    if (pair1 < pair2 && arr.includes(pair1))
      return [arr.indexOf(pair1), arr.indexOf(pair2)];
  }
  return ret;
};

console.log(keyPair(arr1, 10));
console.log(keyPair(arr2, 6));
console.log(keyPair(arr3, 7));
