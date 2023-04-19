let a = 10;
let b = 2;

for (let i = 1; i < 5; i += 2) {
  a += i;
} // i는 1부터 3까지만 +2 증가 한번 됨.
// i = 1, a = 10 + 1 =  11
// i 2 증가 i = 3, a = 11 + 3 = 14

console.log(a + b); // a = 14, b =2, a+b = 14 + 2 = 16
