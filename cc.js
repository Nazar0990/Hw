function minNumber(a, b) {
  return a < b ? a : b;
}

function power(base, exponent) {
  return base ** exponent;
}

function calculate(a, b, operator) {
  switch (operator) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return b !== 0 ? a / b : 'Error: division by zero';
    default: return 'Invalid operator';
  }
}

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function multiplicationTable(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(${num} * ${i} = ${num * i});
  }
}

for (let n = 2; n <= 9; n++) {
  console.log( ${n}:);
  multiplicationTable(n);
  console.log('');
}