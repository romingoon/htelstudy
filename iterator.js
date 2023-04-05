/** 이터레이터 (Iterator)
 *  이터레이터는 '지금 어디에 있는지', 파악할 수 있도록 돕는다는 면에서 일종의 책갈피와 비슷한 개념
 *  '다음엔 어디로 가는지'
 *  배열은 이터러블(iterable) 객체의 좋은 예
 *  이터러블 프로토콜을 준수한 객체를 이터러블 이라 함.
 *  이터러블은 Symbol.iterator 메서드를 구현하거나 프로토타입 체인에 의해 상속한 객체를 말함
 *  이터러블은 for...of 문에서 순회할 수 있으며 Spread 문법의 대상으로 사용할 수 있음

 *  value, done, next() 를 이용하여 '더 쓸 모있는 동작이 가능한' 객체를 만든다!!
 */

const cities = ['서울', '대전', '대구', '부산'];
console.log(Symbol.iterator in cities);

const iter = cities.values();

// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

for (const x of iter) {
  console.log(x); // 서울, 대전, 대구, 부산
} // for-of와 [...arr] 가능 index가 없어도, next()를 보유하고 있어 loop 가능!

// 이터레이블 프로토콜 : next()를 호출하면 value, done을 가진 이터레이터 리터럴을 반환
// 이터러블 프로토콜 : Symbol.iterator를 구현/상속한 메서드를 호출하면 이터레이터 프로토콜을 준수한 이터레이터를 반환한다.

// iterable : 지금 어디까지 왔나? 끝났나?
// [Symbol.iterator]() --> value, done, next() - 더 쓸모 있는 동작이 가능해지도록!!

// for-of는 index가 없는데 어떻게 순서대로 loop를 돌지? -> iterable 하니까! spread(...instance) 가능!!
const arr = [1, 2, 3, 4, 5];
// Symbol.iterator 메서드는 이터레이터를 반환한다.
const it = arr[Symbol.iterator]();

// 이터레이터 프로토콜을 준수한 이터레이터는 next 메서드를 갖는다.
console.log('next' in it);

const itResult = it.next();
console.log(itResult); // {value : 1, done : false}
// while (true) {
//   const x = it.next();
//   console.log(x);
//   if (x.done) break;
// }

/** 빌트인 이터레이터
 * Array, String, Map, Set, TypedArray,
 * DOM data structure(NodeList, HTMLCollection), Arguments
 *
 */

const string = 'Hello';
const iterStr = string[Symbol.iterator]();
console.log(iterStr.next());
console.log(iterStr.next());
console.log(iterStr.next());
console.log(iterStr.next());
console.log(iterStr.next());
console.log(iterStr.next());

//이터러블은 for...of 문으로 순회 가능 하다.
for (const letter of string) {
  console.log(letter);
}

(function () {
  iterArg = arguments[Symbol.iterator]();

  console.log('iterArg : ', iterArg.next());
  console.log('iterArg : ', iterArg.next());
  console.log('iterArg : ', iterArg.next());

  for (const arg of arguments) {
    console.log(arg);
  }
})(1, 2);

const book = [
  '반짝 반짝 작은 별',
  '아름답게 빛나네',
  '서쪽 하늘에서도',
  '동쪽 하늘 에서도',
  '반짝 반짝 작은 별!!',
  '아름답게 비치네',
];

const it1 = book.values();
const it2 = book.values();

console.log(it1.next());
console.log(it1.next());

console.log(it2.next());

console.log(it1.next());
console.log('--------------------------');

class Log {
  constructor() {
    this.messages = [];
  }
  add(message) {
    this.messages.push({ message, timeStamp: Date.now() });
  }
  [Symbol.iterator]() {
    return this.messages.values();
  }
}

const log = new Log();
log.add('first day at set');
log.add('spotted Whale');
log.add('spotted another Versel');

for (let entry of log) {
  console.log(`${entry.message} @@ ${entry.timeStamp}`);
}

class Log2 {
  constructor() {
    this.messages = [];
  }
  add(message) {
    this.messages.push({ message, timeStamp: Date.now() });
  }
  [Symbol.iterator]() {
    let i = 0;
    const messages = this.messages;
    return {
      next() {
        if (i >= messages.length) return { value: undefined, done: true };
        return { value: messages[i++], done: false };
      },
    };
  }
}

class Fibo {
  [Symbol.iterator]() {
    let a = 0,
      b = 1;
    return {
      next() {
        let rval = { value: b, done: false };
        b += a;
        a = rval.value;
        return rval;
      },
    };
  }
}

const fibona = (end) => {
  const fib = new Fibo();

  let i = 0;
  for (let n of fib) {
    console.log(n);
    if (++i > end) break;
  }
};

console.log(fibona(5));

const fibonacci = {
  [Symbol.iterator]() {
    let n1 = 0,
      n2 = 1,
      value;

    return {
      next() {
        value = n1;
        n1 = n2;
        n2 = value + n2;

        return value > 1000 ? { done: true } : { value };
      },
    };
  },
};

for (let n of fibonacci) {
  console.log(n);
}
