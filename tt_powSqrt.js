/** for-of, forEach, map 함수를 이용하여
 * 주어진 정수 배열에서 각 요소의 제곱 한 값과 제곱근 값 반환하는 함수
 */
const arr = [1, 4, 9, 16, 25];

const powSqrtForOf = arr => {
  const arrPow = [];
  const arrSqrt = [];
  for (let el of arr) {
    arrPow.push(el ** 2);
    arrSqrt.push(Math.sqrt(el));
  }
  return [arrPow, arrSqrt];
};

const powSqrtForEach = arr => {
  const arrPow = [];
  const arrSqrt = [];
  arr.forEach(el => {
    arrPow.push(el ** 2);
    arrSqrt.push(Math.sqrt(el));
  });

  return [arrPow, arrSqrt];
};

const powSqrtMap = arr => {
  return [arr.map(el => el ** 2), arr.map(el => Math.sqrt(el))];
};

console.log(powSqrtForOf(arr));
console.log(powSqrtForEach(arr));
console.log(powSqrtMap(arr));
