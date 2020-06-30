function fibonacci(someInt) {
  if (someInt == 0) {
    return 0;
  }
  if (someInt == 1) {
    return 1;
  }
  return fibonacci(someInt - 1) + fibonacci(someInt - 2);
}

for (let i = 0; i < 59; i++) {
  console.log(fibonacci(i));
}
