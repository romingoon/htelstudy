import fetch from 'node-fetch';

// 이터레이션 프로토콜을 구현하여 무한 이터러블을 생성하는 함수
const createInfiniyByIteration = function () {
  let i = 0;
  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      return {
        value: ++i,
      };
    },
  };
};

for (const num of createInfiniyByIteration()) {
  if (num > 5) break;
  console.log(num); // 1 2 3 4 5
}

// 무한 이터러블을 생성하는 제너레이터 함수

function* createInfiniyByGenerator() {
  let i = 0;
  while (true) {
    yield ++i;
  }
}

for (const num of createInfiniyByGenerator()) {
  if (num > 5) break;
  console.log(num); // 1 2 3 4 5
}

// 제너레이터 함수는 일반함수와 같이 함수의 코드 블록을 한 번에 실행하지 않고,
// 함수 코드 블록의 실행을 일시 중지했다가 필요한 시점에 재시작 할 수 있는 특수한 함수

function* counter() {
  console.log('첫번째 호출');
  yield 1;
  console.log('두번째 호출');
  yield 2;
  console.log('세번째 호출');
}

const generatorObj = counter();

console.log(generatorObj.next()); // 첫번째 호출 { value : 1, done : false }
console.log(generatorObj.next()); // 두번째 호출 { value : 2, done : false }
console.log(generatorObj.next()); // 세번째 호출 { value : undefined, done : ture}

// 일반 함수를 호출하면 return 문으로 반환값을 리턴하지만, 제너레이터 함수를 호출하면 제너레이터를 반환
// 제너레이터는 이터러블 이면서 동시에 이터레이터인 객체이다.
// 제너레이터 함수가 생성한 제너레이터는 Symbol.iterator 메서드를 소유한 이터러블이다.
// 제너레이터는 next 메서드를 소유하며, next 메서드를 호출하면 value, done 프로퍼티를 갖는 이터레이터 리절트 객체를 반환하는 이터레이터이다.

//제너레이터 함수 정의
function* counter2() {
  for (const v of [1, 2, 3]) yield v;
}

// 제너레이터 함수를 호출하면 제너레이터를 반환
let counterGenerator = counter2();

//제너레이터는 이터러블이다.
console.log(Symbol.iterator in counterGenerator); // true

// for (const n of counterGenerator) {
//   console.log(n);
// }

// 제너레이터는 이터레이터
console.log('next' in counterGenerator); // true

console.log(counterGenerator.next()); // { value : 1, done : false }
console.log(counterGenerator.next()); // { value : 2, done : false }
console.log(counterGenerator.next()); // { value : 3, done : false }
console.log(counterGenerator.next()); // { value : undefined, done : true}

// 제네레이터 함수 선언문
function* genDecFunc() {
  yield 1;
}

let generatorObj2 = genDecFunc();

// 제네레이터 함수 표현식
const genExpFunc = function* () {
  yield 1;
};
generatorObj2 = genExpFunc();

//제네레이터 메서드
const obj = {
  *generatorObj2Method() {
    yield 1;
  },
};

generatorObj2 = obj.generatorObj2Method();

//제네레이터 클래스 메서드
class MyClass {
  *generatorClsMethod() {
    yield 1;
  }
}

const myClass = new MyClass();

generatorObj2 = myClass.generatorClsMethod();

/** 제너레이터 함수의 호출과 제너레이터 객체
 *  제너레이터 함수를 호출하면 제너레이터 함수의 코드 블록이 실행되는 것이 아니라 제너레이터 객체를 반환
 *  제너레이터 객체는 이터러블이며 동시에 이터레이터이다.
 *  next 메서드를 호출하기 위해  Symbol.iterator 메서드로 이터레이터를 별도 생성할 필요가 없다.
 */

function* pointer() {
  console.log('Point 1');
  yield 1;
  console.log('Point 2');
  yield 2;
  console.log('Point 3');
  yield 3;
  console.log('Point 4');
}

//제너레이터 함수를 호출하면 제너레이터 객체를 반환한다
// 제너레이터 객체는 이터러블이며 동시에 이터레이터이다.
// 따라서 Symbol.iterator 메서드로 이터레이터를 별도 생성할 필요 없음
const pointerGenerator = pointer();

// 첫번째 next 메서드 호출 : 첫번째 yield 까지 실행되고 일시 중단
console.log(pointerGenerator.next()); // Point 1 { value : 1, done : false }

// 두번째 next 메서드 호출 : 두번째 yield 까지 실행되고 일시 중단
console.log(pointerGenerator.next()); // Point 2 { value : 2, done : false }

// 세번째 next 메서드 호출 : 세번째 yield 까지 실행되고 일시 중단
console.log(pointerGenerator.next()); //Point 3 { value : 3, done : false }

// 네번째 next 메서드 호출 : 제너레이터 함수 내의 모든 yield 문이 실행되면 done 프로퍼티 값은 ture가 된다.
console.log(pointerGenerator.next());

// 제너레이터 함수가 생성한 제너레이터 객체의 next 메서드를 호출하면
// 처음 만나는 yield문까지 실행되고 일시 중단(suspend) 된다.
// 또 다시 next 메서드를 호출하면 중단 위치에서 다시 실행(resume)이 시작 하여 \
// 다음 만나는 yield문까지 실행되고 또 다시 일시 중단된다.

// 제너레이터의 활용
// 이터러블의 구현

const infiniteFibonacci = (function () {
  let [pre, cur] = [0, 1];
  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      [pre, cur] = [cur, pre + cur];
      return { value: cur };
    },
  };
})();

for (let num of infiniteFibonacci) {
  if (num > 10000) break;
  console.log(num); // 1 2 3 5 8 13 ...
}

const infiniteFibonacci2 = (function* () {
  let [pre, cur] = [0, 1];
  while (true) {
    [pre, cur] = [cur, pre + cur];
    yield cur;
  }
})();

for (let num of infiniteFibonacci2) {
  if (num > 10000) break;
  console.log(num);
}

const createInfiniyByGen = function* (max) {
  let [pre, cur] = [0, 1];

  while (true) {
    [pre, cur] = [cur, pre + cur];
    if (cur >= max) return;
    yield cur;
  }
};

for (const num of createInfiniyByGen(1000)) {
  console.log(num);
}

// 이터레이터의 next 메서드와는 다르게 제너레이터 객체의 next메서드는 인수를 전달할 수도 있따.
function* gen(n) {
  let res;
  res = yield n;

  console.log(res);
  res = yield res;

  console.log(res);
  res = yield res;

  console.log(res);
  return res;
}

const generatorGen = gen(0);

console.log(generatorGen.next());
console.log(generatorGen.next(1));
console.log(generatorGen.next(2));
console.log(generatorGen.next(3));
/* 
    { value : 0, done : false }
    1
    { value : 1, done : false }
    2
    { value : 2, done : false }
    3
    { value : 3, doen : true}
*/

// 이터레이터의 next 메서드는 이터러블의 데이터를 꺼내온다.
// 이에 반해 제너레이터의 next 메서드에 인수를 전달하면
// 제너레이터 객체에 데이터를 밀어 넣는다.
// 제너레이터의 이런 특성은 동시성 프로그래밍을 가능하게 한다.

/* 비동기 처리 
    제너레이터를 사용해 비동기 처리를 동기 처리처럼 구현할 수 있다.

*/

function getUser(genObj, username) {
  fetch(`https://api.github.com/users/${username}`)
    .then((res) => res.json())
    .then((user) => genObj.next(user.name));
}

const g = (function* () {
  let user;

  user = yield getUser(g, 'jeresig');
  console.log(user);

  user = yield getUser(g, 'ahejlsberg');
  console.log(user);

  user = yield getUser(g, 'ungmo2');
  console.log(user);
})();

console.log(g.next());
