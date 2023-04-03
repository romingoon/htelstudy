/** 배열 검색
    indexOf() : 찾고자 하는 것과 정확히 일치(===) 하는 첫 번째 요소의 인덱스를 반환
    lastIndexOf() : 배열의 끝에서부터 검색
    indexOf와 lastIndexOf는 일치하는 것을 못찾으면 -1을 반환
 */

const o = { name: 'Tom' };
const arr = [1, 5, 'a', o, true, 5, [1, 2], '9'];

console.log(arr.indexOf(5));
console.log(arr.lastIndexOf(5));
console.log(arr.indexOf('a'));
console.log(arr.lastIndexOf('a'));
console.log(arr.indexOf({ name: 'Tom' }));
console.log(arr.indexOf(o));
console.log(arr.indexOf([1, 2]));
console.log(arr.indexOf('9'));
console.log(arr.indexOf(9));
console.log(arr.indexOf(true));

console.log(arr.indexOf('a', 5));
console.log(arr.indexOf(5, 5));
console.log(arr.lastIndexOf(5, 4));
console.log(arr.lastIndexOf(true, 3));

/** 
    findIndex는 일치하는 것을 찾지 못했을 때 -1을 반환한다는 점에서 indexOf와 유사
    보조 함수를 써서 검색 조건을 지정할 수 있으므로  indexOf보다 더 다양한 상황에서 활용할 수 있음
    But, findIndex는 검색을 시작할 인덱스를 지정할 수 없고, 뒤에서 부터 찾는 findLastIndex 같은 짝도 없음
 */

const arrF = [
  { id: 5, name: 'Judith' },
  { id: 7, name: 'Franco' },
];
console.log('-----------findIndex--------------');
console.log(arrF.findIndex((o) => o.id === 5)); // 0
console.log(arrF.findIndex((o) => o.id > 5)); // 1
console.log(arrF.findIndex((o) => o.name === 'Franco')); // 1
console.log(arrF.findIndex((o) => o === 3)); // -1
console.log(arrF.findIndex((o) => o.id === 17)); //-1

console.log('----------find---------');

console.log(arrF.find((o) => o.id === 5));
console.log(arrF.find((o) => o.name === 'Franco'));
console.log(arrF.find((o) => o.id === 2)); // undefined

const arrS = [1, 17, 16, 5, 4, 16, 10, 3, 49];
console.log(arrS.find((x, i) => i > 5 && Number.isInteger(Math.sqrt(x)))); // 49
