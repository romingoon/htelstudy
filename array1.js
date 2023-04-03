/** 배열 / 배열 처리
 *  - 배열은 객체와 달리 본질에서 순서가 있는 데이터 집합, 0으로 시작하는 숫자형 인덱스를 사용
 *  - 자바스크립트의 배율은 비균질적(nonhomogeneous), 즉, 한 배열의 요소가 모두 같은 타입일 필요는 없음
 *  - 배열은 다른 배열이나 객체도 포함할 수 있음.
 *  - 배열 리터럴은 대괄호로 만들고, 배열 오소에 인덱스로 접근할 때도 대괄호를 사용
 *  - 모든 배열에는 요소가 몇개 있는지 나타내는 length 프로퍼티가 있음
 *  - 배열에 배열 길이보다 큰 인덱스를 사용해서 요소를 할당하면 배열은 자동으로 그 인덱스에 맞게 늘어나며, 빈 자리는 undefined로 채워짐
 *  - Array 생성자를 써서 배열을 만들 수도 있으나 그렇게 하는 경우는 별로 없음
 */

// 배열 리터럴

const arr1 = [1, 2, 3]; // 숫자로 구성된 배열
const arr2 = ['one', 2, 'three']; // 비균질적 배열
const arr3 = [
  [1, 2, 3],
  ['one', 2, 'three'],
]; // 배열을 포함한 배열
const arr4 = [
  { name: 'Kim', type: 'object', luckyNumbers: [5, 7, 8] },
  [
    { name: 'Kong', type: 'object' },
    { name: 'Jin', type: 'object' },
  ],
  1,
  function () {
    return 'arrays can contain function too!';
  },
  'three',
];

// 배열 요소 접근하기
console.log(arr1[0]);
console.log(arr2[2]);
console.log(arr3[1]);
console.log(arr4[1][0]);

// 배열 길이
console.log(`arr1 배열 길이 : ${arr1.length}`);
console.log(`arr2 배열 길이 : ${arr2.length}`);
console.log(`arr3 배열 길이 : ${arr3.length}`);
console.log(`arr4 배열 길이 : ${arr4.length}`);
console.log('---------------------------------');

arr1[4] = 5;
console.log(arr1);
console.log(arr1.length);

arr2[10];
console.log(arr2.length);
// 배열의 현재 길이보다 큰 인덱스에 접근하는 것만으로는 배열의 길이가 늘어나지는 않음

// 배열의 처음이나 끝에서 요소 하나를 추가하거나 제거하기

/** push, pop,  unshift, shift
 *  push와 pop은 각각 배열의 끝에 요소를 추가하거나 제거
 *  shift와 unshift는 각각 배열의 앞에 요소를 추가하거나 제거
 *  push와 unshift는 새 요소를 추가해서 늘어난 길이를 반환하고
 *  pop과 shift는 제거된 요소를 반환
 */

const arrA = ['b', 'c', 'd'];
console.log('-----------push/pop/shift/unshift--------------');
arrA.push('e');
console.log(arrA); // arrA는 이제 ['b', 'c', 'd', 'e'] 임
arrA.pop();
console.log(arrA); // arrA는 이제 ['b', 'c', 'd'] 임
arrA.unshift('a');
console.log(arrA); // arrA는 이제 ['a', 'b', 'c', 'd'] 임
arrA.shift();
console.log(arrA); // arrA는 이제 ['b', 'c', 'd'] 임

/** 배열의 끝에 여러요소 추가하기 (concat())
    concat 메서드는 배열의 끝에 여러 요소를 추가한 사본 배열을 반환.
    concat에 배열을 넘기면 배열을 분해해서 원래 배열에 추가한 사본을 반환함.
    concat은 제공 받은 배열을 한번만 분해함. */

const arrB = [1, 2, 3];

console.log('-------------concat 메서드 -------------');
console.log(arrB.concat(4, 5, 6)); // [1, 2, 3, 4, 5, 6] arrBs는
console.log(arrB.concat([4, 5, 6]));
console.log(arrB.concat([4, 5], 6));
console.log(arrB.concat([4, [5, 6]]));

/** 배열 일부 가져오기 (slice())
    배열의 일부만 가져올 때는 slice 메서드 사용.
    slice 메서드는 매개변수 두개를 받음
    첫 번째 매개변수는 어디서부터 가져올지를, 두 번째 매개변수는 어디까지 가져올지를(바로 앞 인덱스까지만 가져옴) 지정함.
    두 번째 매개변수를 생략하면 배열의 마지막까지 반환합니다.
    이 메서드에서는 음수 인덱스를 쓸 수 있고, 음수 인덱스를 쓰면 배열의 끝에서부터 요소를 셈
 * */

const arrC = [1, 2, 3, 4, 5];
console.log('------------slice 메서드--------------');
console.log(arrC.slice(3));
console.log(arrC.slice(2, 4));
console.log(arrC.slice(-2));
console.log(arrC.slice(1, -2));
console.log(arrC.slice(-2, -1));

/** 임의의 위치에 요소 추가하거네 제거하기 (splice())
    splice는 배열을 자유롭게 수정할 수 있음
    첫번째 매개변수는 수정을 시작할 인덱스, 두번째 매개변수는 제거할 요소 숫자.
    아무 요소도 제거하지 않을 때는 0을 넘깁니다.
    나머지 매개변수는 배열에 추가될 요소임
 */

const arrD = [1, 3, 5, 7];
console.log('----------- splice----------');
console.log(arrD.splice(1, 0, 2, 3, 4), arrD);
console.log(arrD.splice(4, 0, 6), arrD);
console.log(arrD.splice(1, 2), arrD);
console.log(arrD.splice(2, 1, 'a', 'b'), arrD);

/** 배열 안에서 요소 교체하기 (copyWithin())
    배열 요소를 복사해서 다른 위치에 붙여 넣고, 기존의 요소를 덮어씀.
    첫번째 매개변수는 복사한 요소를 붙여넣을 인덱스 위치, 
    두번째 매개변수를 복사를 시작할 위치,
    세번째 매개변수는 복사를 끝낼 위치(생략할 수 있음)
    slice와 마찬가지로 음수 인덱스를 사용하면 배열의 끝에서부터 셈 
 */

const arrE = [1, 2, 3, 4];
console.log(arrE.copyWithin(1, 2));
console.log(arrE.copyWithin(2, 0, 2));
console.log(arrE.copyWithin(0, -3, -1));

/** 특정 값으로 배열 채우기 (fill())
    정해진 값으로 배열을 채움
    크기를 지정해서 배열을 생성하는 Array 생성자와 잘 어울림
    배열의 일부만 채우려 할 때는 시작 인덱스와 끝 인덱스를 지정하면 됨
    음수 인덱스도 사용할 수 있음
 */

const arrF = new Array(5).fill(1);
console.log(arrF);
console.log(arrF.fill('a'));
console.log(arrF.fill('b', 1));
console.log(arrF.fill('c', 2, 4));
console.log(arrF.fill(5.5, -4));
console.log(arrF.fill(0, -3, -1));

/** 배열 정렬과 역순 정렬 (reverse()/sort())
    reverse는 배열 요소의 순서를 반대로 바꿈
    sort는 배열 요소의 순서를 정렬
 */

const arrR = [1, 2, 3, 4, 5];
console.log(arrR.reverse());

const arrS = [9, 7, 5, 3, 1];
console.log(arrS.sort());

// sort는 정렬 함수를 받을 수 있음, 일반적으로는 객체가 들어있는 배열을 정렬할 수는 없지만 정렬함수를 사용하면 가능함

const arrObj = [{ age: 16 }, { age: 43 }, { age: 32 }, { age: 17 }];

console.log(arrObj.sort()); // arrObj 바뀌지 않음
console.log(arrObj.sort((a, b) => a.age - b.age));
console.log(arrObj.sort((a, b) => b.age - a.age));
