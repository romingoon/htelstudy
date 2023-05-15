const NUM = [1, 2, 3, 4, 5];

class Num {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
  [Symbol.iterator]() {
    let idx = NUM.indexOf(this.start) - 1;
    let done = false;
    console.log(`idx : ${idx}, done : ${done}, length : ${NUM.length}`);
    return {
      next: () => {
        console.log(
          `idx : ${idx}, done : ${done}, length-1 : ${NUM.length - 1}`
        );
        idx = idx === NUM.length - 1 ? 0 : idx + 1;
        done = done || NUM[idx - 1] === this.end;

        return { value: done ? undefined : NUM[idx], done };
      },
    };
  }
}

const range1 = new Num(5, 3);

const it1 = range1[Symbol.iterator]();

// console.log([...range1]);
console.log(it1.next());
console.log(it1.next());
console.log(it1.next());
console.log(it1.next());
console.log(it1.next());
