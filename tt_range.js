/** 다음과 같은 정수 배열을 생성하는 range 함수를 구현하시오
 *
 * 매개변수 start : 시작값, end:끝값, cv:변화값
 * range(1, 10, 1) ; [1,2,3,4,5,6,7,8,9,10]; 1) start가 end보다 작고 start부터 end까지 1(cv)씩 증가
 * range(1, 10, 2) ; [1,3,5,7,9]            2) start가 end보다 작고 cv 양수
 * range(1,10); [1,2,3,4,5,6,7,8,9,10];     3) start가 end 보다 작고 cv 값이 주어지지 않은 경우
 * range(10,1); [10,9,8,7,6,5,4,3,2,1];     4) start가 end 보다 크고 cv 값이 주어지지 않은 경우
 * range(10, 1, -2) ; [10, 8, 6, 4, 2]      5) start가 end 보다 크고 cv 값이 음수인 경우
 * range(5) [1,2,3,4,5]                     6) 1부터 start값까지 cv가 1씩 늘어나는 경우
 * range(-5) [-5,-4, -3, -2, -1]            7) 주어진 음수의 값부터 0보다 작을 때 까지 cv 가 1씩 증가
 * range(5, 5) [5]                          8) start와 end가 같은 경우
 * range(5, 5, 0) [5]                       9) start와 end가 같고 cv가 0 인 경우
 * range(5, 5, -1) [5]                      10) start와 end가 같고 cv가 0보다 작은, -1(음수)인 경우
 * range(5, 1, 1) []                        11) start가 end 보다 크면서 cv가 양수인 경우
 * range(1, 5, -1) []                       12) start가 end 보다 작은데 cv가 음수인 경우
 * range(0,5) [0,1,2,3,4,5]                 13) start가 0이고 end가 start보다 크며, cv 값이 주어지지 않은 경우
 * range(0, -1) [0, -1]                     14) start가 0이고 end가 start보다 작으며 음수, cv 값은 주어지지 않은 경우
 */

const range = (start, end, cv) => {
  const results = [];

  if ((start > end && cv > 0) || (start < end && cv < 0)) return [];

  end ?? ((end = start > 0 ? start : -1), (start = start <= 0 ? start : 1));
  cv ?? (cv = start === end ? 0 : (cv = start < end ? 1 : -1));

  if (cv === 0) return [start];

  for (let i = start; cv > 0 ? i <= end : i >= end; i += cv) {
    results.push(i);
  }
  return results;
};

const assertRange = (start, end, cv) => {
  const myRange = range(start, end, cv);

  console.log(`${start}, ${end}, ${cv} ===>[${myRange}]`);
};

assertRange(1, 10, 1);
assertRange(1, 10, 2);
assertRange(1, 10);
assertRange(10, 1);
assertRange(10, 1, -2);
assertRange(5);
assertRange(-5);
assertRange(5, 5);
assertRange(5, 5, 0);
assertRange(5, 5, -1);
assertRange(5, 1, 1);
assertRange(1, 5, -1);
assertRange(0, 5);
assertRange(0, -1);
assertRange(0, -3);
assertRange(-3, 0);
assertRange(0, 0);
assertRange(0, 0, 5);
assertRange(2, 1, -5);
assertRange(0, -1, 5);
