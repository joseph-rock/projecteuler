/**
 * By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
 *
 * What is the 10,001st prime number?
 */

function isPrime(num: number): boolean {
  const truncatedNum: number = Math.floor(Math.sqrt(num));
  for (let i = 2; i <= truncatedNum; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

function nextPrime(num: number): number {
  if (!isPrime(num + 1)) {
    return nextPrime(num + 1);
  }
  return num + 1;
}

const primes: number[] = [2];
while (primes.length < 10001) {
  primes.push(nextPrime(primes[primes.length - 1]));
}

console.log(primes[primes.length - 1]);
