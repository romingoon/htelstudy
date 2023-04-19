const arr1 = [1, 4, 45, 6, 10, 8];
const arr2 = [1, 2, 4, 3, 6];
const arr3 = [1, 2, 3, 4, 5];

const keyPair = (arr, target) => {
  for (let num of arr) {
    const pair1 = target - num;
    const pair2 = target - pair1;

    if (arr.includes(pair1)) {
      // console.log(pair1, pair2);
      return [arr.indexOf(pair1), arr.indexOf(pair2)];
    }
  }
};

console.log(keyPair(arr1, 16));
// console.log(keyPair(arr2, 10));
// console.log(keyPair(arr3, 9));

const keyPair2 = (arr, target) => {
  for (let idx in arr) {
    const pair = target - arr[idx];
    if (arr.indexOf(pair) !== -1) return [arr.indexOf(pair), parseInt(idx)];
  }
  return [];
};

console.log(keyPair2(arr1, 16));
