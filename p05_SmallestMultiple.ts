/**
 * 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 *
 * What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 */

function divisors(): number[] {
  return [...Array(20).keys()].map((n) => n + 1);
}

function isDivisible(num: number): boolean {
  return divisors().every((divisor) => num % divisor === 0);
}

let ans: number = divisors().reduce((total, val) => total * val);

for (let n = 20; n > 1; n--) {
  if (isDivisible(ans / n)) {
    ans /= n;
  }
}

console.log(isDivisible(ans));
console.log(ans);
