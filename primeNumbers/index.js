showPrimeNumbers(40);

function showPrimeNumbers(limit) {
  let primeNumbers = [];
  for (let x = 2; x <= limit; x++) if (isPrime(x)) primeNumbers.push(x);
  console.log(primeNumbers);
  return primeNumbers;
}

function isPrime(x) {
  let isPrime = true;
  for (let f = 2; f < x; f++) {
    if (x % f == 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime;
}
