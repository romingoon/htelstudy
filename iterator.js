/** 이터레이터 (Iterator)
 *  이터레이터는 '지금 어디에 있는지' 파악할 수 있도록 돕는다는 면에서 일종의 책갈피와 비슷한 개념
 *  배열은 이터러블(iterable) 객체의 좋은 예
 *
 */

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

const fibona = end => {
  const fib = new Fibo();

  let i = 0;
  for (let n of fib) {
    console.log(n);
    if (++i > end) break;
  }
};

console.log(fibona(20));
