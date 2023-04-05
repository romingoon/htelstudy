/** 커스텀 이터러블
 *   일반 객체는 이터러블이 아님.
 *   일반 객체는 Symbol.iterator 메서드를 소유하지 않음
 *   즉, 일반 객체는 이터러블 프로토콜을 준수하지 않으므로
 *   for...of 문으로 순회할 수 없음
 */

const obj = { a: 1, b: 2 };

console.log(Symbol.iterator in obj); // false

// for (const p of obj) {
// TypeError : obj is not iterable
//   console.log(p);
// }

// 하지만 일반 객체가 이터레이션 프로토콜을 준수하도록 구현하면 이터러블이 됨.

const fibonacci = {
  [Symbol.iterator]() {
    let [pre, cur] = [0, 1];
    const max = 10;

    return {
      next() {
        [pre, cur] = [cur, pre + cur];
        return { value: cur, done: cur >= max };
      },
    };
  },
};

for (const num of fibonacci) {
  console.log(num);
}

// Symbol.iterator 메서드는 next 메서드를 갖는 이터레이터를 반환하여야 한다.
// next 메서드는 done과 value 프로퍼티를 가지는 이터레이터 리절트 객체를 반환함.
// for...of 문은 프로퍼티가 true가 될 때 까지 반복하며, done 프로퍼티가 true가 되면 반복을 중지함
// 이터러블은 for...of 문 뿐만 아니라, Spread 문법, 디스트럭쳐링 할당, Map과 Set의 생정자에도 사용된다.

const fiboArr = [...fibonacci];

console.log(fiboArr);
[1, 2, 3, 5, 8];

// 디스트럭쳐링
const [first, second, ...rest] = fibonacci;

console.log(first, second, rest); // 1 2 [3, 5, 8]

/** 이터러블을 생성하는 함수
 *  위 fibonacci 이터러블에는 외부에서 값을 전달할 방법이 없다는 점이 아쉬움
 * fibonacci 이터러블의 최대값을 외부에서 전달할 수 있도록 수정.
 *
 * */
const fibonacci2 = (max) => {
  let [pre, cur] = [0, 1];
  return {
    // Symbol.iterator 메서드를 구현하여 이터러블 프로토콜을 준수
    [Symbol.iterator]() {
      // Symbol.iterator 메서드는 next 메서드를 소유한 이터레이터를 반환해야함.
      // next 메서드는 이터레이터 리절트 객체를 반환
      return {
        // fibonacci2 객체를 순회할 때마다 next 메서드가 호출 됨.
        next() {
          [pre, cur] = [cur, pre + cur];
          return { value: cur, done: cur >= max };
        },
      };
    },
  };
};

// 이터러블을 반환하는 함ㅁ수에 이터러블의 최대값을 전달
for (const num of fibonacci2(10)) {
  console.log(num); // 1 2 3 5 8
}

/**  이터러블이면서 이터레이터인 객체를 생성하는 함수
 *   이터레이터를 생성하려면 이터러블의 Symbol.iterator 메서드를 호출해야한다.
 *   이터러블이면서 이터레이터인 객체를 생성하면 Symbol.iterator 메서드를 호출하지 않아도 된다.
 */

//이터러블이면서 이터레이터인 객체를 반환하는 함수
const fibonacciFunc = (max) => {
  let [pre, cur] = [0, 1];

  return {
    [Symbol.iterator]() {
      return this;
    },

    next() {
      [pre, cur] = [cur, pre + cur];
      return {
        value: cur,
        done: cur >= max,
      };
    },
  };
};

// iter는 이터러블 이면서 이터레이터이다.
let iter = fibonacciFunc(10);

// iter는 이터레이터이다.
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

iter = fibonacciFunc(10);

// iter는 이터러블이다.
for (const n of iter) {
  console.log(n);
}

/** 무한 이터러블과 Lazy evaluation (지연 평가) */

// 무한 이터럴블을 생성하는 함수 -> 무한 수열을 간단히 표현할 수 있음

const infiniteFibonacci = () => {
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
};

for (const num of infiniteFibonacci()) {
  if (num > 100000000) break;
  console.log(num);
}

const [if1, if2, if3] = infiniteFibonacci();
console.log(if1, if2, if3);

// 이터러블은 데이터 공급자(Data Provider)의 역할을 함.
// 배열, 문자열, Map, Set 등의 빌트인 이터러블은 데이터를 모두 메모리에 확보한 다음 동작
// 하지만, 이터러블은 Lazy evaluation(지연평가)를 통해 값을 생성
// Lazy evaluation은 평가 결과가 필요할 때 까지 평가를 늦추는 기법
