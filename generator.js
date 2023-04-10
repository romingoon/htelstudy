/** 제너레이터 (generator)
    이터레이터를 사용해 자신의 실행을 제어하는 함수
    제너레이터는 두 가지 새로운 개념을 도입.
    1) 함수의 실행을 개별적 단계로 나눔으로써 함수의 실행을 제어한다는 것
    2) 실행 중인 함수와 통신한다는 것

    제너레이터는 두가지 예외를 제외하면 일반적인 함수와 같음
    - 제너레이터는 언제든지 호출자에게 제어권을 넘길 수 있음(yield)
    - 제너레이터는 호출한 즉시 실행되지 않음. 
        대신 이터레이터를 반환하고 이터레이터의 next 메서드를 호출함에 따라 실행됨
    제너레이터를 만들 때는 function 뒤에 *(애스터리스크)를 붙임
    제너레이터에서는 return 외에 yield 키워드를 쓸 수 있음
 */

function* rainbow() {
  yield 'red';
  yield 'orange';
  yield 'yellow';
  yield 'green';
  yield 'blue';
  yield 'navy';
  yield 'violet';
}

const itRainbow = rainbow();

// console.log(itRainbow.next());
// console.log(itRainbow.next());
// console.log(itRainbow.next());
// console.log(itRainbow.next());
// console.log(itRainbow.next());
// console.log(itRainbow.next());
// console.log(itRainbow.next());
// console.log(itRainbow.next());

// rainbow 함수는 이터레이터를 반환하므로 for...of 문에서 순회할 수 있습니다.
for (let color of rainbow()) {
  if (itRainbow.done) break;
  console.log(color);
}

/** yield 표현식과 양방향 통신
 * 제너레이터와 호출자 사이에서 양방향 통신은 yield 표현식을 통해 이루어짐
 * 표현식은 값으로 평가되고 yield는 표현식이므로 반드시 어떤 값으로 평가됨.
 * yield 표현식의 값은 호출자가 제너레이터의 이터레이터에서 next를 호출할 때 제공하는 매개변수
 */

// 대화를 이어가는 제너레이터

function* interrogate() {
  const name = yield 'what is your name?';
  const color = yield 'what is your favorite color?';
  return `${name}'s favorite color is ${color}`;
}

const it = interrogate(); // 1. 제너레이터는 이터레이터를 반환(return) 하고 일시 정지한 상태로 시작함

console.log(it.next()); // 2. undefined를 제너레이터에 넘김(이 값은 사용되지 않음)
console.log(it.next('SeungHyeon')); // 3. 'SeungHyeon'을 제너레이터에 넘김. 제너레이터는 'what is your favorite color?'를 넘기고 일시 정지
console.log(it.next('Blue')); //4. 'Blue'를 제너레이터에 넘김. 제너레이터는 'SeungHyeon's favorite color is Blue'를 반환하고 멈춤

// 제너레이터를 활용하면 호출자가 함수의 실행을 제어할 수 있어 아주 유용하게 쓸 수 있다.
// 호출자가 제너레이터에 정보를 전달하므로 제너레이터는 그 정보에 따라 자신의 동작 자체를 바꿀 수 있음
// 제너레이터는 화살표 함수 표기법으로 만들 수 없으며 반드시 function* 을 써야함

/** 제너레이터와 return
 * yield 문은 설령 제너레이터의 마지막 문이더라도 제너레이터를 끝내지 않음
 * 제너레이터에서 return문을 사용하면 그 위치와 관계없이
 * done은 true가 되고 value 프로퍼티는 return이 반환하는 값이 됨
 */

function* abc() {
  yield 'a';
  yield 'b';
  return 'c';
}

const itABC = abc();
console.log(itABC.next());
console.log(itABC.next());
console.log(itABC.next());

// 이런 동작 방식이 정확하기는 하지만, 제너레이터르 사용할 때는 보통 done이 true이면
// value 프로퍼티에 주의를 기울이지 않는다는 점을 염두에...

//'a'와 'b'는 출력되지만 'c'는 출력되지 않음
for (let l of abc()) {
  console.log(l);
}

/** 제너레이터에서 중요한 값을 return으로 반환하려 하지 말것!!
 * 제너레이터가 반환하는 값을 사용하려 할 때는 yield를 써야함
 * return은 제너레이터를 중간에 종료하는 목적으로만 사용해야 함
 * 제너레이터에 return을 쓸 때는 반환값을 쓰지 않는 습관을 들이길 권함
 */

// function* fibonacci() {
//   let prev = 0,
//     curr = 1;
//   yield prev;
//   yield curr;
//   while (true) {
//     let temp = prev;
//     prev = curr;
//     curr = temp + curr;

//     yield curr;
//   }
// }

// for (const n of fibonacci) {
//   if (n > 1000) break;
//   console.log(n);
// }
