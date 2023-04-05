function* fibonacci() {
  let prev = 0,
    curr = 1;
  yield prev;
  yield curr;
  while (true) {
    let temp = prev;
    prev = curr;
    curr = temp + curr;

    yield curr;
  }
}

for (const n of fibonacci) {
  if (n > 1000) break;
  console.log(n);
}
