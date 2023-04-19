//문제 9. concat을 활용한 출력 방법

//다음 소스 코드를 완성하여 날짜와 시간을 출력하세요.

const year = '2019';
const month = '04';
const day = '26';
const hour = '11';
const minute = '34';
const second = '27';

const result = year.concat(
  '/',
  month,
  '/',
  day,
  ' ',
  hour,
  ':',
  minute,
  ':',
  second
);
console.log(result);
