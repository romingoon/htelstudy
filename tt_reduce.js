/** Array.reduce 함수를 고차 함수로 직접 구현하시오
 * reduce([1,2,3], (a,b) => a + b, 0); // 6이면 통
 * reduce([1,2,3,4,5], (a,b) => a + b); // 15 면 통과
 * reduce([1,2,3,4,5], (a,b) => a * b, 1); // 120이면 통
 * reduce([2,2,2], (a,b) => a * b) // 8 이면 통
 * reduce([3,3,3], (a,b) => a * b, 0) // 0 이면 통과
 */

const reduce = (arr, fn, initValue) => {
  let i = 0;
  let results = initValue ?? ((i += 1), arr[0]);

  for (; i < arr.length; i += 1) {
    results = fn(results, arr[i]);
  }

  return results;
};

// console.log(reduce([1, 2, 3], (a, b) => a + b, 0));
// console.log(reduce([1, 2, 3, 4, 5], (a, b) => a + b));
// console.log(reduce([1, 2, 3, 4, 5], (a, b) => a * b, 1));
// console.log(reduce([2, 2, 2], (a, b) => a * b));
// console.log(reduce([3, 3, 3], (a, b) => a * b, 0));

const arr1 = [1, 2, 3, 4, 5];

const arraySum = arr => arr.reduce((a, b) => a + b);
const arrayAvg = arr => arr.reduce((a, b) => a + b) / arr.length;

console.log(`합계 : ${arraySum(arr1)}`);
console.log(`평균 : ${arrayAvg(arr1)}`);

const arrayPowSumOfMap = arr => arr.map(el => el ** 2).reduce((a, b) => a + b);
const arrayPow3SumOfMap = arr =>
  arr.map(el => Math.pow(el, 3)).reduce((a, b) => a + b);

console.log(`제곱합(map 이용) : ${arrayPowSumOfMap(arr1)}`);
console.log(`세제곱합(map 이용) : ${arrayPow3SumOfMap(arr1)}`);

const sum = (arr, fn) => {
  if (typeof fn !== 'function') fn = x => x;

  return arr.reduce((a, x) => (a += fn(x)), 0);
};

console.log(`합계2 : ${sum(arr1)}`); // 15
console.log(`제곱합2 : ${sum(arr1, x => x * x)}`); // 55
console.log(`세제곱합2 : ${sum(arr1, x => Math.pow(x, 3))}`); //225

const sumOfSquare = arr => sum(arr, x => x * x);

const newSummer = fn => {
  return arr => sum(arr, fn);
};

const sumOfSquare2 = newSummer(x => x * x);
const sumOfCubes = newSummer(x => Math.pow(x, 3));

console.log(`sumOfSquare : ${sumOfSquare(arr1)}`);
console.log(`sumOfSquare2 : ${sumOfSquare2(arr1)}`);
console.log(`sumOfCubes : ${sumOfCubes(arr1)}`);
