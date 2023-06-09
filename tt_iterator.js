const LINE2 = [
  '시청',
  '을지로입구',
  '을지로3가',
  '을지로4가',
  '동대문역사문화공원',
  '신당',
  '상왕십리',
  '왕십리',
  '한양대',
  '뚝섬',
  '성수',
  '건대입구',
  '구의',
  '강변',
  '잠실나루',
  '잠실',
  '잠실새내',
  '종합운동장',
  '삼성',
  '선릉',
  '역삼',
  '강남',
  '교대',
  '서초',
  '방배',
  '사당',
  '낙성대',
  '서울대입구',
  '봉천',
  '신림',
  '신대방',
  '구로디지털단지',
  '대림',
  '신도림',
  '문래',
  '영등포구청',
  '당산',
  '합정',
  '홍대입구',
  '신촌',
  '이대',
  '아현',
  '충정로',
];

// console.log(LINE2.indexOf('시청'));
// console.log(LINE2.indexOf('신당'));

class Subway {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
  [Symbol.iterator]() {
    let idx = LINE2.indexOf(this.start) - 1;

    let done = false;

    return {
      next: () => {
        idx = idx === LINE2.length - 1 ? 0 : idx + 1;
        done = done || LINE2[idx - 1] === this.end;
        return { value: done ? undefined : LINE2[idx], done };
      },
    };
  }
}

const routes1 = new Subway('문래', '신촌');
const it = routes1[Symbol.iterator]();
console.log([...routes1]);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

const routes2 = new Subway('이대', '을지로입구');
console.log([...routes2]);
const it2 = routes2[Symbol.iterator]();

while (true) {
  const x = it2.next();
  console.log(x);
  if (x.done) break;
}
