import { range } from "./deps.ts";

/**
 * 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 *
 * What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 */

function divisors(): number[] {
  return range(1, 21);
}

function isDivisible(num: number): boolean {
  return divisors().every((divisor) => num % divisor === 0);
}

let total: number = divisors().reduce((total, val) => total * val);

for (let n = 20; n > 1; n--) {
  if (isDivisible(total / n)) {
    total /= n;
  }
}

console.log(isDivisible(total));
console.log(total);
