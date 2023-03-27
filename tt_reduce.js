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

console.log(reduce([1, 2, 3], (a, b) => a + b, 0));
console.log(reduce([1, 2, 3, 4, 5], (a, b) => a + b));
console.log(reduce([1, 2, 3, 4, 5], (a, b) => a * b, 1));
console.log(reduce([2, 2, 2], (a, b) => a * b));
console.log(reduce([3, 3, 3], (a, b) => a * b, 0));
