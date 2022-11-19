import { last } from "./deps.ts";

/**
 * The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
 *
 * Find the sum of all the primes below two million.
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

function primes(): number[] {
  const primes: number[] = [2];
  while (last(primes) < 2000000) {
    primes.push(nextPrime(last(primes)));
  }
  primes.pop();
  return primes;
}

console.log(primes().reduce((acc, e) => acc + e));
