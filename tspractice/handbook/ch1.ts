//불리언(Boolean) : boolean 값이라고 일컫는 참/거짓(true/false) 값
let isDone: boolean = false;

//숫자 (Number) : 모든 숫자는 부동 소수값
// 부동 소수에는 number라는 타입이 붙혀짐
// 타입스크립트는 16진수, 10진수 리터럴과 ECMA2015에 소개된 2진수, 8진수 리터럴도 지원

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// 문자열 (String) : 텍스트 데이터 타입을 string으로 표현함
// 큰따옴표("")나  작은 따옴표('')를 문자열 데이터를 감싸는데 사용
let color: string = 'blue';
color = 'red';

//또한 템플릿 문자열을 사용하면 여려 줄에 걸쳐서 문자열을 작성할 수 있음.
// 표현식도 포함시킬 수 있음
// 이 문자열은 백틱 (``) 문자로 감싸지며 ${expr} 과 같은 형태로 표현식을 포함시킬 수 있음

let fullName: string = 'Bobby';
let age: number = 38;

let sentence: string = `Hello, my name is ${fullName}.
I'll be ${age + 1} years old next month. `;

console.log(sentence);

// 배열 (Array) : 배열 타입은 두가지 방법으로 쓸 수 있음.
// 첫 번째 방법은 배열 요소들을 나타내는 타입 뒤에 [] 를 쓰는 것

let numList: number[] = [1, 2, 3, 4];

//두 번째 방법은 제네릭 배열 타입을 쓰는 것. Array<elemType> :

let strList: Array<string> = ['a', 'b', 'c'];

console.log(numList);
console.log(strList);
